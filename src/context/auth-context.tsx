import React, { useContext, useEffect, useState } from "react";
import auth from "../firebase";
import {
//   getAuth,
  createUserWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";

// const auth2 = getAuth();
// interface IAuth {
//   userId: string;
//   getAuth: boolean;
// }

// interface User {
//     id: string;
//     email: string;
//     password: string;
// }

interface IAuthContext {
  currentUser: User | undefined;
  signup: (email: string, password: string) => Promise<UserCredential>;
}

const signup = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const initialValue: IAuthContext = {
  currentUser: undefined,
  signup: signup,
};

const AuthContext = React.createContext<IAuthContext>(initialValue);

export const useAuth = () => {
  return useContext(AuthContext);
};

type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthProvider = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const contextValue: IAuthContext = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
