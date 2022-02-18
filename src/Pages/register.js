import {
  Button,
  TextField,
} from "@material-ui/core";
import React from "react";
import './register.css';
import {useHistory} from 'react-router-dom';


import  { useContext, useState } from 'react';
import {  Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import {useHistory} from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';

const Register = (props) => {
  const history = useHistory();

  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(
      _,
      {
        data: { register: userData }
      }
    ) {
      context.login(userData);
      history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values
  });

  function registerUser() {
    addUser();
  }


  return (
    <div style={{overflow:'hidden'}}>
    <div className="signup__maincontainer">
        <div className="signup__container">
          <div className="signup__left">
            <img
              className="login__logo"
              src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
              alt="Google"
            />
            <h1 className="signup__heading">Create your Google Account</h1>
            <p className="signup__subheading">Continue to Gmail</p>
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
            <div className="signup__inputs">
              <div className="signup__nameInputs">
              

                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  className="signup__nameInput"
                  placeholder="Username.."
                  name="username"
                  type="text"
                  value={values.username}
                  error={errors.username ? true : false}
                  onChange={onChange}
                />
              </div>

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                placeholder="Email.."
                name="email"
                value={values.email}
                error={errors.email ? true : false}
                onChange={onChange}
                
              />

              <div className="signup__passwordInputs">
                <div className="signup__passwordWrapper">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type= "password"
                    variant="outlined"
                    className="signup__passwordInput"
                    placeholder="Password.."
                    name="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
              
                  />

                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    type= "password"
                    variant="outlined"
                    className="signup__passwordInput"
                    placeholder="Confirm Password.."
                    name="confirmPassword"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange}
           
                  />
                </div>
              </div>

              <div className="signup__buttons">
                <Button
                  className="signup__button"
                  variant="text"
                  color="primary"
                  onClick={()=> history.push('/main')}
                >
                  Sign in instead
                </Button>

                <Button
                  className="signup__button"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Create
                </Button>
              </div>
              
            </div>
            </Form>
            {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
          </div>
          
          <figure className="signup__figure">
            <img
              className="signup__figureImg"
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt="account"
            />
            <figcaption className="signup__figcaption">
              One account. All of google working for you
            </figcaption>
          </figure>
        </div>
        </div>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;