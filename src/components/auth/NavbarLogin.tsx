import React, { FormEvent, Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./NavbarLogin.module.css";
import { useAuth } from "../../context/auth-context";

type NavbarLoginProps = {};

const NavbarLogin: React.FC<NavbarLoginProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      console.log('true', isLoading)
      setError("");
      await login(emailRef.current!.value, passwordRef.current!.value);
      navigate("/dashboard");
      setIsLoading(false);
      console.log('false', isLoading)
    } catch {
      setError("Failed to Login");
      setIsLoading(false);
    }
    
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
        {!isLoading && <Link className={classes['signup-link']} to="/signup">Create Account</Link>}
        {/* <label className={classes['navbar-login-label']} htmlFor="password" /> */}
        <input
          className={classes["navbar-login-input"]}
          id="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        {!isLoading && <Button className={classes.button} type="submit">
          Login
        </Button>}
        {isLoading && <span>Loading...</span>}
        {error && <h2>{error}</h2>}
      </form>

      {/* </div> */}
    </Fragment>
  );
};

export default NavbarLogin;
