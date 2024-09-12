import React from "react";
import { Card, Box } from "@mui/material";
import LotteryTicket from "./LotteryTicket"; // Import the LotteryTicket component

const LotteryForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)", // Ensure the Box takes the full height minus header
        padding: "16px",
        marginTop: "120px", // Increased marginTop to add more space from the header
        backgroundColor: "#f5f5f5", // Optional: Background color to add contrast
        width: "100%", // Ensure the Box takes full width of the viewport
      }}
    >
      <Card
        sx={{
          width: "1000px", // Fixed width for the card
          height: "auto", // Height adjusts based on content
          maxWidth: "90%", // Ensures the card doesn't overflow on smaller screens
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          padding: "24px", // Padding for better spacing inside the card
          boxShadow: 3, // Adds shadow to the card
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center items horizontally within this Box
            width: "100%", // Full width of the parent container
            height: "auto", // Height adjusts based on content
          }}
        >
          <LotteryTicket /> {/* Add the LotteryTicket component here */}
        </Box>
      </Card>
    </Box>
  );
};

export default LotteryForm;
