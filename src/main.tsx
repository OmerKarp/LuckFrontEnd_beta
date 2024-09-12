import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { DAppProvider, Config, Sepolia } from "@usedapp/core";
import { createTheme, ThemeProvider } from "@mui/material";
import { yellow, red } from "@mui/material/colors";

const config: Config = {
  readOnlyChainId: Sepolia.chainId,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      dark: "#357a38",
    },
    secondary: {
      main: "#76ff03",
      contrastText: yellow[50],
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          width: "100%",
          color: "white",
          textTransform: "none",
          fontSize: "1rem",
          borderRadius: "8px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "12px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "1px",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "3erm",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75erm",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5erm",
      fontWeight: 600,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DAppProvider config={config}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DAppProvider>
  </StrictMode>
);
