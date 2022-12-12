import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <navbar>
      <div className="inner">
        <a href="/" className="logo">
          <img
            src="https://w7.pngwing.com/pngs/639/725/png-transparent-lettering-text-christmas-christmas-logo-holidays-text-logo.png"
            alt="WRU DOING CHRISMAS"
          />
        </a>

        <div className="sub-menu">
          <ul className="menu">
            <li>
              <a href="/">Sign in</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <a href="/">Customer Service</a>
            </li>
          </ul>
        </div>

        <div className="main-menu">
          <div className="main__name">
            <a href="/">FAMILY</a>
          </div>
          <div className="main__name">
            <a href="/">COUPLE</a>
          </div>
          <div className="main__name">
            <a href="/">SINGLE</a>
          </div>
          <div className="main__name">
            <a href="/">PARENTS</a>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
