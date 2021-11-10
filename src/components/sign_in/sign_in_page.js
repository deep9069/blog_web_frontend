import React from "react";
import "./sign_in.css";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div id='sign_in_page'>
      <div id='left'>
        <Link to='/'>BlogSite</Link>
      </div>
      <form id='form'>
        <p id='welcome'>Welcome Back</p>
        <div>
          <FiMail fontSize='20px' />
          <input type='email' placeholder='Email' required />
        </div>
        <div>
          <FiLock fontSize='20px' />
          <input type='password' placeholder='Password' required />
        </div>
        <span id='forgot'>
          <Link to='/forget-password'>Forgot Password ?</Link>
        </span>
        <button id='btn_sign_in'>Continue </button>
        <span>
          New to blogSite? <Link to='/sign-up'>Join now</Link>
        </span>
      </form>
    </div>
  );
}
