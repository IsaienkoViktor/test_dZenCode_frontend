import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { theme } from "./shared/styles/theme.js";
import { GlobalStyles } from "./shared/styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
