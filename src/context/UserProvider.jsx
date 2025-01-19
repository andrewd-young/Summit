import { createContext, useState, useContext} from "react";
import { login } from "../lib/api";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const userExists = async (email) => {
        const response = await login(email);
        console.lopg(response)
        if(response.status === 200) {
            return true;
        } else { 
            return false;
        }
    }

    const getUserData = async(email) => {
        const response = await login(email);
        if(response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    }


    return(
        <UserContext.Provider value={{userExists, user, setUser, getUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserData = () => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error('useUserData must be used within a UserProvider');
    }
    return context;
}
