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
  const {
    isAuthenticated,
    Moralis,
    authenticate,
    logout,
    account,
    isInitialized,
  } = useMoralis();
  const [userState, setUser] = useState();
  const [currentAccount, setCurrentAccount] = useState("");

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

  const evaluateAccounts = async (account) => {
    let accountsList = Moralis.User.current();
    if (isAuthenticated && accountsList) {
      let user = accountsList.get("accounts")[0];
      if (account && account !== user) {
        setCurrentAccount(account);
        //await logout();
        //await authenticate({ provider: "injected" });

        //setUser(isAuthenticated);
        //window.location.reload();
      }
    } else if (!isAuthenticated) {
      setCurrentAccount("");
      //window.location.replace("/");
    }
  };

  useEffect(() => {
    setUser(isAuthenticated);
    if (isInitialized) {
      evaluateAccounts(account);
    }
  }, [isAuthenticated, account, isInitialized]);

  return (
    <AuthContext.Provider value={[userState, currentAccount]}>
      <AuthUpdateContext.Provider value={[connectWallet, disConnectWallet]}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
