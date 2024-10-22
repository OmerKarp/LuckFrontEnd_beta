import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import YourWalletBalance from "./YourWalletBalance";
import Deposit from "./Deposit";
import LuckBankStatistics from "./LuckBankStatistics";
import LuckBankUserBalance from "./LuckBankUserBalance";

const Feed = () => {
  return (
    <Grid container spacing={2} sx={{ bgcolor: "cyan" }}>
      <Grid size={8}>
        <Paper elevation={10}>
          <LuckBankStatistics />
        </Paper>
        <Paper elevation={10} sx={{ mt: 4 }}>
          <Deposit />
        </Paper>
      </Grid>
      <Grid size={4}>
        <Paper elevation={10}>
          <YourWalletBalance />
        </Paper>
        <Paper elevation={10} sx={{ mt: 4 }}>
          <LuckBankUserBalance />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Feed;
