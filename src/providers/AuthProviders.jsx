import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;