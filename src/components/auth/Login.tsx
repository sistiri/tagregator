import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Login.module.css";

type LoginProps = {};

const Login: React.FC<LoginProps> = (props) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logged in!");
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <Button className={classes.button} type="submit">
          Login
        </Button>
      </form>
    </Fragment>
  );
};

export default Login;
