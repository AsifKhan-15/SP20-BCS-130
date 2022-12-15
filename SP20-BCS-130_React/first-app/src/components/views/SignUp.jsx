import React from "react";
const SignUp = () => {
  return (
    <div>
      <h1> Sign Up </h1>
      <button>Sign Up</button>
      <div>
        <label>First Name:</label>

        <input type="text" placeholder="First Name"></input>
        <label>Last Name:</label>

        <input type="text" placeholder="Last Name"></input>
        <label>Email:</label>

        <input type="email" placeholder="Enter Email"></input>
        <label>Password:</label>

        <input type="password" placeholder="Password"></input>
      </div>
    </div>
  );
};

export default SignUp;
