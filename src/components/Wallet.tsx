import { Button, Box } from "@mui/material";
import { useEthers } from "@usedapp/core";

const Wallet = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const isConnected = account !== undefined;

  return (
    <Box
      sx={{
        position: "absolute",
        top: "16px",
        right: "16px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {isConnected ? (
        <Button onClick={deactivate}>Disconnect</Button>
      ) : (
        <Button onClick={activateBrowserWallet}>Connect</Button>
      )}
    </Box>
  );
};

export default Wallet;
