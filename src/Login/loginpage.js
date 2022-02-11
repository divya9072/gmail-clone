import { Button } from '@mui/material'
import React from 'react'
import'./loginpage.css'
const Loginpage = () => {
  return (
 <>
 <div class="login-div">
 <div class="row">
        <div class="logo"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png'/></div>
      </div>
      <div class="row center-align">
        <h5>Sign in</h5>
        <h6>Use your Google Account</h6>
      </div>
  <div class="row">
    <div class="input-field col s12">
      <input id="email_input" type="email" class="validate"/>
      <label for="email_input">Email</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <input id="password_input" type="password" class="validate"/>
      <label for="password_input">Password</label>
    </div>
  </div>
  <div class="row">
        <div class="col s12">Not your computer? Use a Private Window to sign in. <a href="#"><b>Learn more</b></a></div>
      </div>
      <div class="row"></div>
      <div class="row">
        <div class="col s6"><a href="#">Create account</a></div>
        <div class="col s6 right-align" ><Button variant='contained' color='primary'>LOGIN</Button></div>
       
      </div>
</div>
 </>
  )
}

export default Loginpage