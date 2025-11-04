// src/git_data_fetcher.mjs
import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// ====== Config de Autenticação ======
const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

if (!openSource.githubConvertedToken || !openSource.githubUserName) {
  console.error(
    "[git_data_fetcher] GITHUB_TOKEN e/ou GITHUB_USERNAME ausentes no .env"
  );
  process.exit(1);
}

// ====== Queries GraphQL ======
const query_pr = {
  query: `
    query {
      user(login: "${openSource.githubUserName}"){
        pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
          totalCount
          nodes{
            id
            title
            url
            state
            mergedBy {
              avatarUrl
              url
              login
            }
            createdAt
            number
            changedFiles
            additions
            deletions
            baseRepository {
              name
              url
              owner {
                avatarUrl
                login
                url
              }
            }
          }
        }
      }
    }
  `,
};

const query_issue = {
  query: `
    query{
      user(login: "${openSource.githubUserName}") {
        issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
          totalCount
          nodes{
            id
            closed
            title
            createdAt
            url
            number
            assignees(first:100){
              nodes{
                avatarUrl
                name
                url
              }
            }
            repository{
              name
              url
              owner{
                login
                avatarUrl
                url
              }
            }
          }
        }
      }
    }
  `,
};

const query_org = {
  query: `
    query{
      user(login: "${openSource.githubUserName}") {
        repositoriesContributedTo(last: 100){
          totalCount
          nodes{
            owner{
              login
              avatarUrl
              __typename
            }
          }
        }
      }
    }
  `,
};

const query_pinned_projects = {
  query: `
    query { 
      user(login: "${openSource.githubUserName}") { 
        pinnedItems(first: 6, types: REPOSITORY) {
          totalCount
          nodes{
            ... on Repository{
              id
              name
              createdAt
              url
              description
              isFork
              languages(first: 10){
                nodes{
                  name
                }
              }
            }
          }
        }
      }
    }
  `,
};

// ====== HTTP base ======
const baseUrl = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

// ====== Mapa de Ícones + Destaque DS ======
const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",

  // Bibliotecas/stack Data Science (algumas podem não vir do GitHub como "language",
  // mas deixamos mapeadas para uso futuro ou injeções manuais):
  NumPy: "simple-icons:numpy",
  Pandas: "simple-icons:pandas",
  SciPy: "simple-icons:scipy",
  "scikit-learn": "simple-icons:scikitlearn",
  TensorFlow: "logos-tensorflow",
  PyTorch: "simple-icons:pytorch",
  Matplotlib: "simple-icons:matplotlib",
  Seaborn: "simple-icons:seaborn",
  Plotly: "simple-icons:plotly",
};

// Tecnologias que devem ganhar "boost" de tamanho (Data Science)
const DS_SET = new Set([
  "Python",
  "Jupyter Notebook",
  "NumPy",
  "Pandas",
  "SciPy",
  "scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Matplotlib",
  "Seaborn",
  "Plotly",
]);

// Tamanho base e boost para DS (ajuste livre)
const BASE_ICON_SIZE = 36;
const DS_ICON_SIZE = 46;

// ====== Helpers ======
async function gfetch(body) {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const txt = await res.text();
  let data;
  try {
    data = JSON.parse(txt);
  } catch (e) {
    throw new Error(`Falha ao parsear resposta: ${txt.slice(0, 200)}`);
  }
  if (data.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
  }
  return data;
}

function writeJSON(path, obj, label) {
  fs.writeFile(path, JSON.stringify(obj), (err) => {
    if (err) {
      console.error(`[git_data_fetcher] Erro ao gravar ${label}:`, err);
    } else {
      console.log(`[git_data_fetcher] ${label} atualizado em: ${path}`);
    }
  });
}

// ====== Execução ======
(async () => {
  try {
    // Pull Requests
    const prData = await gfetch(query_pr);
    const prs = prData.data.user.pullRequests.nodes || [];
    let openPR = 0,
      closedPR = 0,
      mergedPR = 0;
    for (const pr of prs) {
      if (pr.state === "OPEN") openPR++;
      else if (pr.state === "MERGED") mergedPR++;
      else closedPR++;
    }
    const prOut = {
      data: prs,
      open: openPR,
      closed: closedPR,
      merged: mergedPR,
      totalCount: prs.length,
    };
    writeJSON(
      "./src/shared/opensource/pull_requests.json",
      prOut,
      "Pull Requests"
    );

    // Issues
    const issueData = await gfetch(query_issue);
    const issues = issueData.data.user.issues.nodes || [];
    let openIs = 0,
      closedIs = 0;
    for (const is of issues) {
      if (is.closed === false) openIs++;
      else closedIs++;
    }
    const issueOut = {
      data: issues,
      open: openIs,
      closed: closedIs,
      totalCount: issues.length,
    };
    writeJSON("./src/shared/opensource/issues.json", issueOut, "Issues");

    // Orgs contribuídas
    const orgData = await gfetch(query_org);
    const orgNodes =
      orgData.data.user.repositoriesContributedTo.nodes || [];
    const orgs = { data: [] };
    for (const n of orgNodes) {
      const owner = n.owner;
      if (owner?.__typename === "Organization") {
        if (!orgs.data.find((o) => JSON.stringify(o) === JSON.stringify(owner))) {
          orgs.data.push(owner);
        }
      }
    }
    writeJSON(
      "./src/shared/opensource/organizations.json",
      orgs,
      "Organizations"
    );

    // Projetos fixados (pinned)
    const pinnedData = await gfetch(query_pinned_projects);
    const projects = pinnedData.data.user.pinnedItems.nodes || [];
    const newProjects = { data: [] };

    for (const p of projects) {
      const langNodes = p?.languages?.nodes || [];
      const newLangobjs = [];

      for (const ln of langNodes) {
        const name = ln?.name;
        if (!name) continue;

        if (name in languages_icons) {
          const isDS = DS_SET.has(name);
          newLangobjs.push({
            name,
            iconifyClass: languages_icons[name],
            variant: isDS ? "ds" : "default",
            size: isDS ? DS_ICON_SIZE : BASE_ICON_SIZE,
          });
        }
      }

      // Guarda apenas o que será usado pelo front
      newProjects.data.push({
        id: p.id,
        name: p.name,
        createdAt: p.createdAt,
        url: p.url,
        description: p.description,
        isFork: p.isFork,
        languages: newLangobjs,
      });
    }

    writeJSON(
      "./src/shared/opensource/projects.json",
      newProjects,
      "Pinned Projects"
    );

    console.log("\n[git_data_fetcher] Concluído com sucesso ✅");
  } catch (err) {
    console.error("[git_data_fetcher] Falha na execução:", err?.message || err);
    process.exit(1);
  }
})();
