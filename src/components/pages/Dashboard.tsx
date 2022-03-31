import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from'./Dashboard.module.css'

const Dashboard: React.FC = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate()

    const logoutHandler = async () => {
        setError('')
        try {
            await logout()
            navigate('/login')
        } catch (error) {
            setError('Failed to log out!')
        }

    }

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <Card className="card">
        <Fragment>
          <h2>Profile</h2>
          {error && <p>{error}</p>}
          <p><strong>Email: </strong> {currentUser && currentUser.email}</p>
          
      <Button className={classes.button}><Link to="./update-profile">Update Profile</Link></Button>
        </Fragment>
      </Card>
      <Link to='/' onClick={logoutHandler}>Log Out</Link>
    </Fragment>
  );
};

export default Dashboard;
