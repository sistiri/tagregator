import React, { Fragment, Ref, RefAttributes, RefObject, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Signup.module.css";

type SignupProps = {};

const Signup: React.FC<SignupProps> = (props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  return (
    <Fragment>
      <Card className={classes.card}>
        <div className={classes["signup-box"]}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <div id="password-confirm">
              <label>Password Confirmation</label>
              <input
                type="password-confirm"
                ref={passwordConfirmRef}
                required
              />
            </div>
            <Button className={classes.button} type="submit">
              Sign Up
            </Button>
          </form>
        <div className={classes["para-2"]}>Already have an account? Log In</div>
        </div>
      </Card>
    </Fragment>
  );
};

export default Signup;
