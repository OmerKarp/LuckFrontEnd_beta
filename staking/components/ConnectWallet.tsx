import { Button, Typography } from "@mui/material";
import React from "react";

const ConnectWallet = () => {
  return (
    <Button
      variant="contained"
      sx={{ m: 3, position: "absolute", top: 4, right: 4 }}
    >
      <Typography>Connect Wallet</Typography>
    </Button>
  );
};

export default ConnectWallet;
