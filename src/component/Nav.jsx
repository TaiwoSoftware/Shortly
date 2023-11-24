import React from "react";
import Logo from "./images/logo.svg";
import Hamburger from "./hamburger";
const Nav = () => {
  return (
    <header>
      <div className="all">
        <div className="combination">
          <img src={Logo} alt="logo" />
          <nav>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </nav>
        </div>
        <div className="create">
          <button className="login">Login</button>
          <button className="signUp">Sign Up</button>
          <Hamburger />
        </div>
        
      </div>
    </header>
  );
};

export default Nav;
