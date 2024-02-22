import { NavLink } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as BurgerMenu } from "../../assets/icons/burger-menu.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Logo className="logo-icon" />
        </div>
        <div className="burger-menu">
          <button className="burger-button" type="button">
            <BurgerMenu width="28" height="28" />
          </button>
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <NavLink className="navigation-link" href="#home">
                HOME
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className="navigation-link" href="#">
                OFFERING
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className="navigation-link" href="#">
                EXPERIANCE
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className="navigation-link" href="#about">
                ABOUT
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className="navigation-link" href="#contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="button header-button" type="button">
          Book
        </button>
      </div>
    </header>
  );
};

export default Header;
