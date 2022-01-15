import "./index.css";
import Admin from "./pages/Admin";
import CoinHolder from "./pages/CoinHolder";
import CoinCreator from "./pages/CoinCreator";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Proposals from "./pages/Proposals";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

function App() {
  const {
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
    Moralis,
    account,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/holder" exact element={<CoinHolder />} />
          <Route path="/creator/:section" exact element={<CoinCreator />} />
          <Route
            path="/propsals/:address/:section"
            exact
            element={<Proposals />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;