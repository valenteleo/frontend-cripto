import PrimaryHeader from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <PrimaryHeader/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
