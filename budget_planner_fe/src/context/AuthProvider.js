import { createContext,useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState({});

  const setAuthUser = (username) => {
    setAuth({ user: username });
  };

  const logout = () => {
    // Authentifizierungsstatus zurücksetzen
    setAuth({});
  };

  return(
    <AuthContext.Provider value={{auth, setAuthUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}



export default AuthContext;