import React, { FormEvent, Fragment, useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

type LoginProps = {};

const Login: React.FC<LoginProps> = (props) => {
  const navigate = useNavigate()
  const { login, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true)
      setError('')
      await login(emailRef.current!.value, passwordRef.current!.value);
    } catch {
      setError('Failed to Login')
    }
    setIsLoading(false)
    // console.log(JSON.stringify(currentUser!.email))
    console.log('LOGGED IN')
    console.log('currentUser: ', currentUser)
    navigate('/dashboard')
  };

  return (
    <Fragment>
      <Card className={classes.card}>
        <div className={classes["login-box"]}>
          <h2 className="text-center mb-4">Log In</h2>
          {currentUser && <p>Current User: {JSON.stringify(currentUser.email)}</p>}
          <form onSubmit={submitHandler}>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <Button disabled={isLoading} className={classes.button} type="submit">
              Log In
            </Button>
          </form>
          {error && <p style={{color:'red'}}>{error}</p>}
          <div className={classes["para-2"]}>
            Need an account? <Link to='../../signup'>Sign Up</Link>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default Login;
