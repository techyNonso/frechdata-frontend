import "./index.css";
import Admin from "./pages/Admin";
import CoinHolder from "./pages/CoinHolder";
import CoinCreator from "./pages/CoinCreator";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/holder" exact element={<CoinHolder />} />
          <Route path="/creator" exact element={<CoinCreator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
