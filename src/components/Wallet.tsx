import { Button, Box } from "@mui/material";
import { useEthers } from "@usedapp/core";

const Wallet = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const isConnected = account !== undefined;

  return (
    <>
      {isConnected ? (
        <Button
          variant="contained"
          sx={{ m: 3, position: "absolute", top: 4, right: 4, color: "white" }}
          onClick={deactivate}
        >
          Disconnect
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ m: 3, position: "absolute", top: 4, right: 4, color: "white" }}
          onClick={activateBrowserWallet}
        >
          Connect
        </Button>
      )}
    </>
  );
};

export default Wallet;
