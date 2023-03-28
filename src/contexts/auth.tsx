import { auth } from "@/services/auth";
import { createContext, useContext, useEffect, useState } from "react";
import useUser from "./user";

type Props = {
  children: JSX.Element
};

const AuthContext = createContext({ isLoading: false });

export const AuthProvider = ({ children }: Props) => {
  const { user, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    }, (error) => {
      console.log(error.message);
    });
  }, [user]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return children;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
