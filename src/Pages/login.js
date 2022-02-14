import { Button } from "@mui/material";
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
          alt="logo"
        ></img>
        <Button variant="contained" color="primary">
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default Login;
