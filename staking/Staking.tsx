import React from "react";
import { useState } from "react";
import { Container, Box } from "@mui/material";
import ConnectWallet from "./components/ConnectWallet";
import Feed from "./components/Feed";
import Header from "./components/Header";

function staking() {
  return (
    <Container
      sx={{
        bgcolor: "grey",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        margin: 0,
      }}
    >
      <ConnectWallet />
      <Header />
      <Feed />
    </Container>
  );
}

export default staking;
