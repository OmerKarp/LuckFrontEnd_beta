import React from "react";
import {
  Card,
  Box,
  Button,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone"; // Ensure this import is correct

const games = [
  { name: "Game 1" },
  { name: "Game 2" },
  { name: "Game 3" },
  // Add more games here
];

const LotteryTicket = () => {
  const theme = useTheme(); // Access the theme for color

  return (
    <Card
      sx={{
        width: "100%", // Full width of the parent container
        maxWidth: "400px", // Maximum width for the card
        padding: "16px", // Padding inside the card
        boxShadow: 2, // Adds shadow to the card
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center items horizontally
      }}
    >
      <Typography
        variant="h5" // Make the text larger
        sx={{
          marginBottom: "8px",
          color: theme.palette.primary.main, // Use primary color from theme
        }}
      >
        Ticket Difficulty: {/* Add dynamic content here */}
      </Typography>
      <Box
        sx={{
          width: "100%", // Full width of the parent container
          marginBottom: "16px", // Space below the grid
        }}
      >
        <Grid container spacing={2}>
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column", // Stack items vertically
                  alignItems: "center",
                  padding: "8px",
                  borderRadius: "4px",
                  backgroundColor: "#e0e0e0", // Background color for each game item
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "4px", // Space between name/icon and dropdown
                  }}
                >
                  <Typography variant="body1" sx={{ marginRight: "8px" }}>
                    {game.name}
                  </Typography>
                  <HelpTwoToneIcon />
                </Box>
                <FormControl size="small" sx={{ width: "100%" }}>
                  <InputLabel>Options</InputLabel>
                  <Select defaultValue="" label="Options">
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                    {/* Add more options as needed */}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button variant="contained" color="primary" sx={{ marginTop: "16px" }}>
        Buy Ticket
      </Button>
    </Card>
  );
};

export default LotteryTicket;
