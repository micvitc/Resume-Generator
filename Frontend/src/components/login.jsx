import React from "react";
import Input from "./input";

function Login() {
  return (
    <div>
      <h1>
        <strong>sign in</strong>
      </h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;