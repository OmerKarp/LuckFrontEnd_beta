import { Button } from "@mui/material";
import React from "react";

const GoToStaking = () => {
  return (
    <Button
      variant="contained"
      sx={{ m: 3, position: "absolute", top: 4, left: 4, color: "white" }}
    >
      <a href="/staking/">Staking</a>
    </Button>
  );
};

export default GoToStaking;
