import React, { useState } from "react";
import "./sign_in.css";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
export default function SignIn() {

  //initializing states for form email and password fields
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  //handle form state changes
  const handleEmailChange = event =>{
    setEmail(event.target.value);
  }
  const handlePasswordChange = event =>{
    setPassword(event.target.value);
  }

  const handleFormSubmit = async ()  => {
    console.log(email,password);

    const res = await axios.post(process.env.REACT_APP_URL + "user/signIn",{email,password});
    console.log(res);
  }
  
  //jsx
  return (
    <div id='sign_in_page'>
      <div id='left'>
        <Link to='/'>BlogSite</Link>
      </div>
      <form id='form' onSubmit = {handleFormSubmit}>
        <p id='welcome'>Welcome Back</p>
        <div>
          <FiMail fontSize='20px' />
          <input type='email' placeholder='Email' required value = {email} onChange = {handleEmailChange}/>
        </div>
        <div>
          <FiLock fontSize='20px' />
          <input type='password' placeholder='Password' required minLength = {8} value = {password} onChange = {handlePasswordChange} />
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

