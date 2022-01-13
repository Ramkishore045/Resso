import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      
      <p>
        <center>
          <h1>RESSO</h1>
          <h3>"MUSIC IS LOVE IN SEARCH OF WORD."</h3>
        </center>
      </p>
      <a href={loginUrl}>LOGIN WITH RESSO</a>
    </div>
  );
}

export default Login;