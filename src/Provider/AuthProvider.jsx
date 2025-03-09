import { Children, createContext, useState } from "react";

export    const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState({});

  

    const userInfo = {
         user,
         setUser
    };




    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;