import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Wallet from "./components/Wallet";
import LotteryForm from "./components/LotteryForm";
import GoToStaking from "./components/GoToStaking";

function App() {
  return (
    <Container
      sx={{
        bgcolor: "grey",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        margin: 0,
      }}
    >
      <GoToStaking />
      <Wallet />
      <Header />
      <LotteryForm />
    </Container>
  );
}

export default App;
