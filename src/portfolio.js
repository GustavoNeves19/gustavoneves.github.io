
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gustavo Neves | Portfolio",
  description:
    "Portfólio profissional de Gustavo Neves com foco em Ciência de Dados, aprendizado de máquina e soluções baseadas em dados para problemas reais.",
  og: {
    title: "Gustavo Neves | Portfolio",
    type: "website",
    url: "https://gustavoneves.dev", // personalize
  },
};


//Home Page
const greeting = {
  title: "Data Science",
  logo_name: "Gustavo Neves",
  nickname: "",
  subTitle:
    "Vejo a Ciência de Dados como uma forma estratégica de transformar dados em decisões. A jornada começa na coleta e preparação, passa pela análise exploratória, modelagem estatística e machine learning, e se estende ao uso de IA Generativa para potencializar análises e automações. Aqui compartilho como aplico esse processo — da análise ao impacto — em problemas do mundo real",

  resumeLink:
    "https://drive.google.com/file/d/1DWhWxoottg_l4DuMbQto2yeU7tWcP26x/view?usp=sharing",
  portfolio_repository: "https://github.com/GustavoNeves19/GustavoNeves19",
  githubProfile: "https://github.com/GustavoNeves19",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/GustavoNeves19",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/gustavo-nevesz",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:gustavonpr19@gamil.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
 
  {
  name: "WhatsApp",
  link: "https://wa.me/5591985698828", // Substitua "SEU_NUMERO" por algo como 5591999999999
  fontAwesomeIcon: "fa-whatsapp", // Ícone do WhatsApp
  backgroundColor: "#25D366", // Cor oficial do WhatsApp
},

];

const skills = {
  data: [
    {
      title: "Coleta e Preparação de dados",
      fileName: "DataScienceImg",
      skills: [
       "Todo projeto de Ciência de Dados começa entendendo o contexto do problema. É essencial alinhar com todas as partes envolvidas para garantir que a coleta seja precisa e relevante. Nesta fase, o objetivo é preparar os dados para a análise.",
    "⚡ Extração de dados de APIs, arquivos CSV, Excel ou bancos relacionais e não relacionais;",
    "⚡ Padronização, limpeza e tratamento de dados inconsistentes ou ausentes;",
    "⚡ Unificação de diferentes fontes de dados e normalização para análise eficiente;",
    "⚡ Estruturação de datasets para facilitar etapas futuras como EDA e modelagem."
      ],
      softwareSkills: [
    {
      skillName: "Excel",
      fontAwesomeClassname: "simple-icons:microsoftexcel",
      style: { color: "#217346" },
    },    

    {
      skillName: "Pandas",
      fontAwesomeClassname: "simple-icons:pandas",
      style: { backgroundColor: "transparent", color: "#150458" },
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "simple-icons:mysql",
      style: { color: "#00758F" },
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "simple-icons:googlecloud",
      style: {
        color: "#4285F4",
      },
    },
    
    {
      skillName: "AWS",
      fontAwesomeClassname: "simple-icons:amazonaws",
      style: {
        color: "#FF9900",
      },
    },
      ],
    },
    
    {
      title: "Análise Exploratória dos Dados",
      fileName: "CloudInfraImg",
      skills: [
        "Após preparar os dados, o próximo passo é entender suas estruturas, padrões e relações. A Análise Exploratória (EDA) permite investigar os dados antes de aplicar qualquer modelo.",
    "⚡ Visualização de distribuições e correlações com gráficos estatísticos;",
    "⚡ Identificação de outliers e padrões incomuns nos dados;",
    "⚡ Cálculo de medidas descritivas como média, desvio padrão, mediana, etc.;",
    "⚡ Análises segmentadas para entender diferenças entre grupos ou categorias."
      ],
      softwareSkills: [
       
  {
    skillName: "Matplotlib",
    fontAwesomeClassname: "simple-icons:plotly",
    style: { color: "#3f4f75" },
  },
  {
    skillName: "Seaborn",
    fontAwesomeClassname: "simple-icons:python",
    style: { backgroundColor: "transparent", color: "#4B8BBE" },
  },
  {
    skillName: "NumPy",
    fontAwesomeClassname: "simple-icons:numpy",
    style: { color: "#013243" },
  },
  {
    skillName: "SciPy",
    fontAwesomeClassname: "simple-icons:scipy",
    style: { color: "#8CAAE6" },
  },
  {
    skillName: "Jupyter",
    fontAwesomeClassname: "simple-icons:jupyter",
    style: { color: "#F37626" },
  },
],


    },
    {
  title: "Machine learning & Deep Learning",
  fileName: "Designlnmg",
  skills: [
    "Com os dados compreendidos, a modelagem permite criar previsões, classificações e segmentações. Escolher o modelo certo depende do objetivo e da natureza dos dados.",
    "⚡ Criação de modelos supervisionados como regressão e classificadores;",
    "⚡ Aplicação de algoritmos não supervisionados como clusterização (K-Means, DBSCAN);",
    "⚡ Validação cruzada e ajuste de hiperparâmetros para melhorar a performance;",
    "⚡ Testes de métricas como precisão, recall, RMSE e F1-score para avaliar resultados."
  ],
  softwareSkills: [

  {
    skillName: "Scikit-learn",
    fontAwesomeClassname: "simple-icons:scikitlearn",
    style: { color: "#F7931E" },
  },
  {
    skillName: "Tensorflow",
    fontAwesomeClassname: "logos-tensorflow",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "Keras",
    fontAwesomeClassname: "simple-icons:keras",
    style: { backgroundColor: "white", color: "#D00000" },
  },
  {
    skillName: "PyTorch",
    fontAwesomeClassname: "logos-pytorch",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "XGBoost",
    fontAwesomeClassname: "simple-icons:xgboost",
    style: { color: "#EC4D28" },
  },
],
},
{
  title: "Interpretação e Visualização",
  fileName: "FullStackImg",
  skills: [
    "A última etapa é transformar o que foi descoberto em conclusões claras. Visualizações e explicações acessíveis ajudam stakeholders a tomarem decisões baseadas em dados.",
    "⚡ Criação de dashboards interativos com ferramentas como Power BI ou Plotly;",
    "⚡ Uso de gráficos para comunicar tendências e insights relevantes;",
    "⚡ Relatórios interpretativos e narrativas baseadas em dados;",
    "⚡ Comunicação orientada ao público: técnico, executivo ou leigo."
  ],
  softwareSkills: [
    {
  skillName: "Google Docs",
  fontAwesomeClassname: "simple-icons:googledocs",
  style: { color: "#4285F4" },
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "simple-icons:powerbi",
    style: { color: "#F2C811" },
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "simple-icons:tableau",
    style: { color: "#E97627" },
  },
  {
    skillName: "Streamlit",
    fontAwesomeClassname: "simple-icons:streamlit",
    style: { color: "#FF4B4B" },
  },
    {
    skillName: "PowerPoint",
    fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
    style: { color: "#B7472A" },
  },
  ]
},
{
  "title": "IA & Agentes Inteligentes",
  "fileName": "GenerativeAIImg",      // <-- adicione isto        // mantém a referência direta à imagem
  "skills": [
    "A IA Generativa representa a fronteira do aprendizado de máquina, criando novos conteúdos como texto, imagens, código e áudio, em vez de apenas analisar dados existentes.",
    "⚡ Desenvolvimento e fine-tuning (ajuste fino) de Large Language Models (LLMs) como GPT, Llama e Gemini;",
    "⚡ Criação de modelos para Geração Aumentada de Recuperação (RAG) para respostas mais contextuais e baseadas em fontes específicas;",
    "⚡ Implementação de modelos Text-to-Image (como Stable Diffusion, DALL-E) e Text-to-Audio (como MusicGen, Voice AI);",
    "⚡ Avaliação e mitigação de vieses (bias) e riscos associados à geração de conteúdo (Responsibility AI/IA Responsável)."
  ],
  "softwareSkills": [
    {
      "skillName": "PyTorch",
      "fontAwesomeClassname": "simple-icons:pytorch",
      "style": { "color": "#EE4C2C" }
    },
    {
      "skillName": "TensorFlow",
      "fontAwesomeClassname": "simple-icons:tensorflow",
      "style": { "color": "#FF6F00" }
    },
    {
      "skillName": "Hugging Face",
      "fontAwesomeClassname": "simple-icons:huggingface",
      "style": { "color": "#FFC0CB" }
    },
    {
      "skillName": "LangChain",
      "fontAwesomeClassname": "simple-icons:chainlink",
      "style": { "color": "#0091FF" }
    },
    {
      "skillName": "Vector DBs",
      "fontAwesomeClassname": "simple-icons:databricks",
      "style": { "color": "#FF3621" }
    }
  ]
}


    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidade Federal Rural da Amazônia",
      subtitle: "Bacharel em Sistema de Informação",
      logo_path: "ufra.png",
      alt_name: "IIITDM Kurnool",
      duration: "2023 - Presente",
      descriptions: [
         "⚡ Pesquisador no Computational Technologies Laboratory (LabTeC/ CNPq / UFRA), atuando em projetos de inovação acadêmica e tecnológica.",
         "⚡ Participação ativa em projetos de Data Science e IA aplicada, envolvendo análise preditiva, classificação, NLP e automação de fluxos de dados.",
         "⚡ Bolsista de Iniciação Científica em Ciência de Dados:",
         "  • As Criptomoedas e sua Relação com as Redes Sociais – Análise do impacto de mídias digitais como X (Twitter), YouTube e Google Trends na volatilidade de criptomoedas. Utilização de Python, web scraping, NLP e modelagem econométrica.",
         "  • Inteligência Artificial Aplicada a Sistemas Fotovoltaicos – Desenvolvimento de modelo preditivo para estimar a potência de saída de painéis solares usando algoritmos de Machine Learning, com foco em eficiência energética.",
         "  • Agente de IA Generativa → em desenvolvimento um agente com LLMs, LangChain e LlamaIndex para automatizar análises de experimentos científicos, reduzindo tempo de processamento e aumentando confiabilidade dos resultados."
         ,
      ],
      website_link: "https://novo.ufra.edu.br/",
    },
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner  CLF-02",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1KaZNURMxt0IFxliSFqXwMbphYoh3iCxE/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#ffffffff",
    },
    {
      title: "Data Science",
      subtitle: "- Fernando Amaral",
      logo_path: "udemy_logo.jpeg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ef51d7d3-76f0-4178-90b9-b2948642acb0/",
      alt_name: "deeplearning.ai",
      color_code:  "#A435F0",
    },
    {
      title: "Machine Learning com Data Science",
      subtitle: "- Jonas Granatyr (Em Andamento)",
      logo_path: "udemy_logo.jpeg",
      certificate_link:
        "",
      alt_name: "Google",
      color_code: "#A435F0",
    },
    {
      title: "Análise de Dados e Machine Learning para Finanças",
      subtitle: "- Jonas Granatyr",
      logo_path: "udemy_logo.jpeg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c9107ceb-948e-4ff0-acb6-d642b9cb5a60/",
      alt_name: "IBM",
      color_code: "#A435F0",
    },
    {
      title: "Robotic Process Automation ",
      subtitle: "- Direto ao Ponto",
      logo_path: "udemy_logo.jpeg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-95f82c02-339e-4a4c-bfb6-3de01e0b6765/",
      alt_name: "Microsoft",
      color_code: "#A435F0",
    },
    {
      title: "Python 3 - Curso Completo do Básico ao Avançado",
      subtitle: "- Cod3r Cursos Online",
      logo_path: "compass_uol_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1AtYyJUstQ1FAgAi5z_q3GyoJBuFEAaVO/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#C8921C",
    },
    {
      title: "SQL Moderno e Completo",
      subtitle: "- Fernando Amaral",
      logo_path: "compass_uol_logo.jpeg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#C8921C",
    },
    {
      title: "Docker: Docker Swarn e Kubernetes",
      subtitle: "- Matheus Battisti",
      logo_path: "compass_uol_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1UQEYARuNRi7rh8lObhZLmGPDXptDkPYY/view?usp=sharing",
      alt_name: "Google",
      color_code: "#C8921C",
    },
    {
      title: "Metodologias Ágies",
      subtitle: "- Bruna Ruschel",
      logo_path: "compass_uol_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1f9mwn5o516C2R6ZC4xx5gv-QJp7yriCO/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#C8921C",
    },
    {
      title: "Linux:  Shell e Apache",
      subtitle: "- Matheus Battisti",
      logo_path: "compass_uol_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1JXcVh_YQGhYbEYcrTvnhn9L4aGaZqZiN/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#C8921C",
    },
    {
      title: "Git e GitHub",
      subtitle: "- Matheus Battisti",
      logo_path: "compass_uol_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/19LpxYxlGD9mTVC_DZPZn1EzIrSRQ4a4K/view?usp=sharing",
      alt_name: "GCP",
      color_code: "#C8921C",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiência",
  subtitle: "Trabalhos, estágios e voluntários",
  description:
    "Atuo com Ciência de Dados desde 2024. Durante a graduação, participei de projetos de pesquisa científica nas áreas de biotecnologia, finanças e saúde, aplicando técnicas de machine learning, estatística, NLP e IA Generativa. Desenvolvi um agente de IA Generativa para automatizar análises em experimentos científicos, reduzindo significativamente o tempo de processamento e aumentando a confiabilidade dos resultados. Além disso, atuei em soluções de engenharia de dados na nuvem com foco em automação e análise de grandes volumes de dados.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experiência Profissional",
      work: true,
      experiences: [
        {
          title: "Estágio em Data Science",
          company: "Grupo de Pesquisa em IA e Simulação Aplicada à Ciência de Alimentos.",
          company_url: "",
          logo_path: "grafa-1.png",
          duration: "Abril 2024 - Presente",
          location: "Belém, Pará, PA",
          description: "Desenvolvimento de um Agente de IA Generativa para automatizar análises em experimentos científicos, utilizando LLMs, LangChain e LlamaIndex, reduzindo o tempo de processamento de dias para minutos e aumentando a confiabilidade dos resultados. Construção de modelos preditivos em experimentos de extração de compostos bioativos com Pandas, NumPy e Statsmodels, aplicando testes estatísticos (ANOVA) e regressões polinomiais. Criação de métodos multivariados de otimização via função de desejabilidade e do BIOPEP Matcher, integrando web scraping e análise automática de massas m/z. Participação em todo o ciclo de Data Science, incluindo EDA, modelagem, validação e deploy de interfaces interativas em Streamlit para uso em ambientes laboratoriais.",
          color: "#000000",
        },
        {
          title: "Bolsista em Data Science",
          company: "Universidade Federal Rural da Amazônia.",
          company_url: "https://novo.ufra.edu.br/",
          logo_path: "ufra-experiencias.png",
          duration: "Junho 2024 - Presente",
          location: "Belém, Pará, PA",
          description:
            "Atuação como Cientista de Dados em projetos de iniciação científica com foco em criptomoedas e energia solar. Desenvolvimento de robôs em Python para web scraping e coleta de dados em redes sociais (X, YouTube, Google Trends), aplicação de NLP e modelagem econométrica para predição de indicadores digitais. Atuação em projeto de IA aplicada à previsão da geração fotovoltaica, com uso de algoritmos de aprendizado de máquina para otimizar a estimativa de potência em painéis solares.",
          color: "#fc1f20",
        },
        {
          title: "Pesquisador",
          company: "Computational Technologies Laboratory (LabTec/ CNPq/ UFRA)",
          company_url: "https://sites.google.com/view/gplabtec",
          logo_path: "cnpq-3.png",
          duration: "Outubro 2024 - Presente",
          location: "Bélem, Pará, PA",
          description:
            "Pesquisa em soluções tecnológicas inovadoras com foco em Ciência, Tecnologia e Inovação no Computational Technologies Laboratory (LabTec/CNPq/UFRA). Atuação em projetos como rastreamento de próteses médicas com Arduino e aplicação de aprendizado de máquina a problemas científicos. Uso de metodologias ágeis, como Scrum, para gestão de projetos de pesquisa. Versionamento de código e colaboração em equipe com Git e GitHub.",
          color: "#0879bf",
        },
        {
          title: "Estágio em Cloud Data Engineering AWS",
          company: "Compass UOL",
          company_url: "https://compass.uol/pt/home/",
          logo_path: "compass_uol_logo.jpeg",
          duration: "Setembro 2024 - Fevereiro 2025",
          location: "Passo Fundo, Rio Grande do Sul, RS",
          description:
            "Engenharia de dados em nuvem com foco na AWS, atuando como Cloud Data Engineer na Compass UOL. Construção de Data Lakes organizados em camadas (Raw, Trusted e Refined), automação de pipelines escaláveis com AWS Lambda, Glue, Athena e QuickSight. Experiência em processamento massivo de dados com Apache Spark e Python (ETL, POO, análise estatística). Desenvolvimento de pipeline completo para análise do mercado cinematográfico. Conhecimento em modelagem de dados (relacional e dimensional), versionamento com Git e uso de ambientes Linux.",
          color: "#9b1578",
        },
        
      ],
    },
    
    {
      title: "Serviços e Colaborações",
      experiences: [
        {
          title: "Extração de Dados do Reddit ",
          company: "PUC Minas",
          company_url: "https://www.pucminas.br/destaques/Paginas/default.aspx",
          logo_path: "logo-puc-1.png",
          location: "Minas Gerais, MG",
          description:
            "Desenvolvimento de um scraper avançado para Reddit utilizando Selenium e BeautifulSoup. A aplicação realiza navegação automática em tópicos específicos, simula interações humanas como rolagem de página e múltiplos cliques em botões dinâmicos (“Ver mais comentários” e “outras respostas”), garantindo a coleta completa dos comentários. Implementação de lógica de espera com WebDriverWait para garantir a estabilidade da coleta.Os dados foram processados com pandas e exportados em formato CSV com encoding compatível com Excel. O projeto demonstrou domínio em automação de browsers, scraping de conteúdo dinâmico, e estruturação de dados para análise textual.",
          color: "#4285F4",
        },

      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos",
  description:
    "Apresento projetos de Ciência de Dados desenvolvidos com foco em gerar valor para negócios. As soluções aqui demonstradas vão desde análises exploratórias e modelagens preditivas até interfaces web interativas, combinando tecnologia e estratégia para apoiar a tomada de decisão baseada em dados.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contato",
    profile_image_path: "gustavo-neves.jpeg",
    description:
      "Entre em contato comigo pelas redes sociais ou pelo formulário abaixo. Estou disponível para colaborações, projetos profissionais e oportunidades na área de ciência de dados, tecnologia e soluções baseadas em dados.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
