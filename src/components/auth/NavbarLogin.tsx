import React, { FormEvent, Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./NavbarLogin.module.css";
import { useAuth } from "../../context/auth-context";

type NavbarLoginProps = {};

const NavbarLogin: React.FC<NavbarLoginProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    

    try {
      setIsLoading(true);
      setError("");
      await login(emailRef.current!.value, passwordRef.current!.value);
    } catch {
      setError("Failed to Login");
    }
    setIsLoading(false);
    // console.log(JSON.stringify(currentUser!.email))
    console.log("LOGGED IN");
    console.log("currentUser: ", currentUser);
    navigate("/dashboard");
  };

  return (
    <Fragment>
      {/* <div className={classes['container']}> */}
      <form className={classes["navbar-login-form"]} onSubmit={submitHandler}>
        {/* <label className={classes['navbar-login-label']} htmlFor="email" /> */}
        <input
          className={classes["navbar-login-input"]}
          id="email"
          type="text"
          placeholder="Email"
          ref={emailRef}
        />
        <Link to="/signup">Create Account</Link>
        {/* <label className={classes['navbar-login-label']} htmlFor="password" /> */}
        <input
          className={classes["navbar-login-input"]}
          id="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <Button className={classes.button} type="submit">
          Login
        </Button>
      </form>

      {/* </div> */}
    </Fragment>
  );
};

export default NavbarLogin;
