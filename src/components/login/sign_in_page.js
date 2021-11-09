import React from 'react';
import "./sign_in.css";
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function SignIn() {
    return (
        <div id="sign_in_page">
            <div id="left">
                BlogSite
            </div>
            <form id="form">
                <br />
                <p id='welcome'>Welcome Back</p>
                <br />
                <br />
                <div>
                    <FiMail fontSize='20px' />
                    <input type="email" placeholder="Email" required />
                </div>
                <br />
                <br />
                <div>
                    <FiLock fontSize='20px' />
                    <input type="password" placeholder="Password" required />
                </div>
                <span id="forgot">
                    <Link to="/forget-password">Forgot Password ?</Link>
                </span>
                <br />
                <br />
                <button id="btn_sign_in">Continue </button><br /><br />
                <span>New to blogSite? <Link to="/sign-up">Join now</Link></span>
                <br />
            </form>
        </div>
    )
}


