import { Button } from "@mui/material";
import React from "react";
import "./loginpage.css";
const Loginpage = () => {
  return (
    <>
      <div className="body">
        <div class="login-div">
          <div class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" />
          </div>
          <div class="logo__heading">
            <span style={{ fontSize: "30px" }}>Sign in</span>
            <span>to continue to Gmail</span>
          </div>

          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />

          <div class="logo__footer">
            <span>
              Not your computer? Use Guest mode to sign in privately.
              <br />
              <b>Learn more</b>
            </span>
          </div>
          <div class="logo__button">
            <span style={{color:'#1a73e8'}}>Create account</span>
            <Button variant="contained" color="primary">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
