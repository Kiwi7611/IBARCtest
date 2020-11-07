import userEvent from "@testing-library/user-event";
import React, { Component, useState } from "react";
import User from "../User";
import CurrentUser from "../CurrentUser";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleSignout,
  } = props;
  const [user, setUser] = useState(new User());

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autofocus
          required
          value={email}
          onChange={(e) => {
            user.email = e.target.value;
            user.firstName = "chris";
            user.lastName = "lin";
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            user.password = e.target.value;
            setPassword(e.target.value);
          }}
        ></input>
        <div className="buttonContainer">
          {<button onClick={()=>{user.handleSignUp();}}>Sign up</button>}
          {
            <button
              onClick={()=>{CurrentUser.handleLogIn(email, password)}}
            >
              Sign in
            </button>
          }
        </div>
      </div>
    </section>
  );
};
export default Login;
