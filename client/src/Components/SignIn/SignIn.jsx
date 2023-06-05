import React from 'react';
import './signin.css';
import { authenticateUser } from '../../tools/api';
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  // console.log(document.querySelector('#username').value);
  const authToken = async (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    const email = emailInput.value;
    const password = passwordInput.value;
    try {
      const response = await authenticateUser(email, password);
      console.log(response);
      const token = response;

      console.log({email, password});
      // Store the token in localStorage
      sessionStorage.setItem('token', token);
      navigate("/profile");
      
      // Handle the response or perform further actions based on authentication success
    } catch (error) {
      console.error('Authentication failed:', error);
      // Handle the error appropriately, such as displaying an error message to the user
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button onClick={authToken} className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;