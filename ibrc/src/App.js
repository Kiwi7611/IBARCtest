import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import fire from "./config/fire";
import { findUserFromDB } from "./User";
import User from "./User";
import CurrentUser from "./CurrentUser";
const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        
        console.log("fuck");
      });
  };

  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log("fuck");
      });
  };

  const handleSignout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  useEffect(()=>{
    if (CurrentUser.loggedIn()){
      CurrentUser.getEmail().then((email)=>{setEmail(email)});
      CurrentUser.getLastName().then((lName)=>{setLastName(lName)});
      CurrentUser.getFirstName().then((fName)=>{setFirstName(fName)});
    }
  });

  return (
    <div className>
      {user ? (
        <div>
          <h1>{firstName}</h1>
          <input type="text" id = "email"></input>
          <button onClick={()=>{CurrentUser.setFirstName(document.getElementById("email").value)}}>Set first name</button>
          <button
            onClick={()=>{CurrentUser.setFirstName("test1")}}
          >
            testbutton
          </button>
          <button
            onClick={()=>{handleSignout()}}
          >
            logout
          </button>
        </div>
      ) : (
        <Login
          user={new User()}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          handleSignout={handleSignout}
        />
      )}
    </div>
  );
};

export default App;
