import "./index.css";
import Admin from "./pages/Admin";
import CoinHolder from "./pages/CoinHolder";
import CoinCreator from "./pages/CoinCreator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<CoinHolder />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/creator" exact element={<CoinCreator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
