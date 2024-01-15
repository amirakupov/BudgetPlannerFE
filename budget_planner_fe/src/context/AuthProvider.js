import { createContext,useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState({});

  const setAuthUser = (username) => {
    setAuth({ user: username });
  };

  return(
    <AuthContext.Provider value={{auth, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  )
}



export default AuthContext;