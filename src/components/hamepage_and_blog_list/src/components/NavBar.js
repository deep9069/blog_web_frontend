import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <i className="fas fa-feather-alt"></i>
             Blog
          </NavLink>

          {/* <div className = "quote">“Blogging is a conversation, not a code.”</div> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/SignUpLogIn"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Not Registered ?
              </NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink exact to="/search" 
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
            <i className="fas fa-search"></i>
          </NavLink>
          </li>

          <li className="nav-setting">
            <NavLink exact to="/setting" 
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
            <i className="fas fa-cog"></i>
          </NavLink>
          </li>

         
          </ul>
          {/* <div className="setting-icon" onClick={handleClick}>
            <i className={click ? "fa fa-cog":"fa fa-cog"}></i>
          </div> */}

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default NavBar;
