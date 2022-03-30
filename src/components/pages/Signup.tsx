import React, { FormEvent, Fragment, useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

type SignupProps = {};

const Signup: React.FC<SignupProps> = (props) => {
  const navigate = useNavigate()
  const { signup, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);


  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if(passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match')
    }

    try {
      setIsLoading(true)
      setError('')
      await signup(emailRef.current!.value, passwordRef.current!.value);
    } catch {
      setError('Failed to create an account')
    }
    setIsLoading(false)
    console.log(JSON.stringify(currentUser!.email))
    console.log('SIGNED UP')
    navigate('/mybookmarks')
  };

  return (
    <Fragment>
      <Card className={classes.card}>
        <div className={classes["signup-box"]}>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <div id="password-confirm">
              <label>Password Confirmation</label>
              <input
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </div>
            <Button disabled={isLoading} className={classes.button} type="submit">
              Sign Up
            </Button>
          </form>
          {error && <p style={{color:'red'}}>{error}</p>}
          <div className={classes["para-2"]}>
            Already have an account? <Link to='../../login'>Log In</Link>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default Signup;
