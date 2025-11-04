import React from "react";
import "./App.css";
import Main from "./containers/Main.js";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme.js";
import { GlobalStyles } from "./global.js";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
