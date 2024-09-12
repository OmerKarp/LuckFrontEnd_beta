import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Wallet from "./components/Wallet";
import LotteryForm from "./components/LotteryForm";

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Wallet />
      <LotteryForm />
    </Container>
  );
}

export default App;
