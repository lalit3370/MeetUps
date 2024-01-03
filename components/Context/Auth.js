import { createContext, useState } from "react";

export const AuthContext = createContext("test");

function AuthProvider({children}) {
    const [authToken, setAuthToken] = useState('test1')
    return <AuthContext.Provider value={{authToken}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
