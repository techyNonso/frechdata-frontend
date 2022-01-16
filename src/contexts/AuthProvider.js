import React, { useContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { connectors } from "./config";
import Swal from 'sweetalert2'

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();
const LoaderContext = React.createContext();

//auth hook
export function useAuth() {
  return useContext(AuthContext);
}

//auth update hook
export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

export function useLoader(){
  return useContext(LoaderContext)
}

export function AuthProvider({ children }) {
  const {
    isAuthenticated,
    Moralis,
    authenticate,
    logout,
    account,
    isInitialized,
    authError
  } = useMoralis();
  const [userState, setUser] = useState();
  const [loaderState, setLoader] = useState(false);
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
    setLoader(true)
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
    if(authError){
      setLoader(false)
        Swal.fire({
      title: 'Error!',
      text: 'An error occured during authentication',
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#2C6CF4',
      })
    }else{
      setLoader(false)
    }
    setUser(isAuthenticated);
    if (isInitialized) {
      evaluateAccounts(account);
      
    }
  }, [isAuthenticated, account, isInitialized,authError]);

  return (
    <AuthContext.Provider value={[userState, currentAccount]}>
      <AuthUpdateContext.Provider value={[connectWallet, disConnectWallet]}>
        <LoaderContext.Provider value={[loaderState,setLoader]}>
          {children}
        </LoaderContext.Provider>
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
