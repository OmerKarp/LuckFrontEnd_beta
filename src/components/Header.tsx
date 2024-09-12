import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "40px", // Move the header down a bit
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        textAlign: "center",
        color: "white",
        fontSize: "1.5rem", // Adjusted font size
        fontWeight: 700, // Optional: Make the text bold
        zIndex: 1000, // Ensure the header is above other content
      }}
    >
      <Typography variant="h1">Lottery</Typography>
    </Box>
  );
};

export default Header;
