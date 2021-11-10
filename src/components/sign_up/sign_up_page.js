import React from "react";
import "./sign_up.css";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div id='sign_up_page'>
      <div id='left'>
        <Link to='/'>BlogSite</Link>
      </div>
      <form id='form'>
        <div id='welcome'>Create Account</div>
        <div>
          <FiUser fontSize='20px' />
          <input type='text' placeholder='Enter Name' required />
        </div>
        <div>
          <FiMail fontSize='20px' />
          <input type='email' placeholder='Email' required />
        </div>
        <div>
          <FiLock fontSize='20px' />
          <input type='password' placeholder='Enter Password' required />
        </div>
        <div>
          <FiLock fontSize='20px' />
          <input type='password' placeholder='Confirm Password' required />
        </div>
        <button id='btn_sign_up'>Continue</button>
        <span>
          Already Member?<Link to='/sign-in'>Login</Link>
        </span>
      </form>
    </div>
  );
}
