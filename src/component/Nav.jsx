import React, { useEffect, useState } from "react";
import Logo from "./images/logo.svg";
import Hamburger from "./Hamburger";
const Nav = () => {

  const [display, setDisplay] = useState(false)
  const setter = () => {
    setDisplay(!display)
  }

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
          <button onClick={setter} className="signUp">Sign Up</button>
          {display && (<div className={display}>
            <Hamburger />
          </div>)}
        </div>
      </div>
    </header>
  );
};

export default Nav;
