import { createContext, useContext, useState } from "react";
import { User } from "firebase/auth";
import { IUserContext } from "@/interfaces/user";

type Props = {
    children: JSX.Element
}

const UserContext = createContext<IUserContext>({
    user: null,
    setUser: () => {}
});

export const UserProvider = ({children}: Props) => {
    const [user, setUser] = useState<User | null>(null);

    const value = {user, setUser}

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {  
    return useContext(UserContext);
}

export default useUser;