import React, { useContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { connectors } from "./config";

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

//auth hook
export function useAuth() {
  return useContext(AuthContext);
}

//auth update hook
export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

export function AuthProvider({ children }) {
  const { isAuthenticated, Moralis, authenticate, logout } = useMoralis();
  const [userState, setUser] = useState();

  //connect wallet
  const connectWallet = async () => {
    /* const myuser = await authenticate({
      provider: "walletconnect",
      mobileLinks: [
        "rainbow",
        "metamask",
        "argent",
        "trust",
        "imtoken",
        "pillar",
      ],
    });*/
    await authenticate({ provider: "injected" });

    //set auth state from moralis
    setUser(isAuthenticated);
  };

  //disconnect wallet
  const disConnectWallet = async () => {
    await logout();
    setUser(false);
  };

  useEffect(() => {
    setUser(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={userState}>
      <AuthUpdateContext.Provider value={[connectWallet, disConnectWallet]}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
