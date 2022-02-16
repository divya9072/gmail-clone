import React, { useContext, useState } from "react";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Form } from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";
import { Button } from "@mui/material";
import "./loginpage.css";

function Loginpage(props) {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      history.push("/main");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="body">
      <div class="login-div">
        <div class="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" />
        </div>
        <div class="logo__heading">
          <span style={{ fontSize: "30px" }}>Sign in</span>
          <span>to continue to Gmail</span>
        </div>
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <input
            label="Username"
            placeholder="Username.."
            name="username"
            type="text"
            value={values.username}
            error={errors.username ? true : false}
            onChange={onChange}
          />
          <input
            label="Password"
            placeholder="Password.."
            name="password"
            type="password"
            value={values.password}
            error={errors.password ? true : false}
            onChange={onChange}
          />

          <div class="logo__footer">
            <span>
              Not your computer? Use Guest mode to sign in privately.
              <br />
              <b>Learn more</b>
            </span>
          </div>
          <div class="logo__button">
            <span
              style={{ color: "#1a73e8", cursor: "pointer" }}
              onClick={() => history.push("/register")}
            >
              Create account
            </span>
            <Button variant="contained" color="primary" type="submit">
              LOGIN
            </Button>
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
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Loginpage;
