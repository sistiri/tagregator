import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./NavbarLogin.module.css";

type LoginProps = {};

const Login: React.FC<LoginProps> = (props) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logged in!");
  };

  return (
    <Fragment>
      <div className={classes['container']}>

      <form className={classes['navbar-login-form']} onSubmit={submitHandler}>
        {/* <label className={classes['navbar-login-label']} htmlFor="email" /> */}
        <input className={classes['navbar-login-input']} id="email" type="text" placeholder='Email'/>
        {/* <label className={classes['navbar-login-label']} htmlFor="password" /> */}
        <input className={classes['navbar-login-input']} id="password" type="password" placeholder='Password'/>
        <Button className={classes.button} type="submit">
          Login
        </Button>
      </form>
      </div>
    </Fragment>
  );
};

export default Login;
