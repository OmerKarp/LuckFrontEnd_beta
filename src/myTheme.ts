import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

const myTheme = createTheme({
    palette: {
      primary: {
        main: "#4caf50",
        dark: "#357a38",
      },
      secondary: {
        main: "#76ff03",
        contrastText: yellow[50],
      },
    },
});

export default myTheme