import { Button } from "@mui/material";
import React from "react";

const GoToPlay = () => {
  return (
    <Button
      variant="contained"
      sx={{ m: 3, position: "absolute", top: 4, left: 4, color: "white" }}
    >
      <a href="/">Staking</a>
    </Button>
  );
};

export default GoToPlay;
