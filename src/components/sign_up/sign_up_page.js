import React from 'react'
// import './sign_up.css'
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function SignUp() {
    return (
        <div>
            <div id="page">
                <div id="left1">
                    <p>BlogSite</p>
                </div>
                <div id="right1">
                    <div Class="form1">
                        <div Class="sign">
                            <p id='welcome'>Create Account</p>
                            <form>
                                <FiUser fontSize='20px' />
                                <input type="text" placeholder="Enter Name" required /><br /><br />
                                <FiMail fontSize='20px' />
                                <input type="email" placeholder="Email" required /><br /><br />
                                <FiLock fontSize='20px' />
                                <input type="password" placeholder="Enter Password" required /><br /><br />
                                <FiLock fontSize='20px' />
                                <input type="password" placeholder="Confirm Password" required /><br /><br />
                                <button id="btn-login">Continue </button><br /><br />
                                <span>Already Member?   <Link to="/sign-in">Login</Link></span>
                            </form><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

