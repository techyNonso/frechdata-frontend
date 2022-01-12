import "./index.css";
import Admin from "./pages/Admin";
import CoinHolder from "./pages/CoinHolder";
import CoinCreator from "./pages/CoinCreator";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proposals from "./pages/Proposals";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/holder" exact element={<CoinHolder />} />
          <Route path="/creator/:section" exact element={<CoinCreator />} />
          <Route path="/propsals" exact element={<Proposals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
