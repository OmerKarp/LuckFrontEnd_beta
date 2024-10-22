import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import { DAppProvider, Config, Sepolia } from "@usedapp/core";
import { ThemeProvider } from "@mui/material";
import myTheme from "./myTheme.ts";

const config: Config = {
  readOnlyChainId: Sepolia.chainId,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DAppProvider config={config}>
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </DAppProvider>
  </StrictMode>
);
