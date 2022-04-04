import React, { useContext, useEffect, useState } from "react";
import auth from "../firebase";
import {
  //   getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";

interface IAuthContext {
  currentUser: User | undefined;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>
}

const signup = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
    return signOut(auth)
  };

const initialValue: IAuthContext = {
  currentUser: undefined,
  signup: signup,
  login: login,
  logout: logout,
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      console.log('useEffect: ', user)
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const contextValue: IAuthContext = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading && <p> Loading...</p>}
      {!isLoading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
