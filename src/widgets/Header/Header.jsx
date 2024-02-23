import { NavLink } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as BurgerMenu } from "../../assets/icons/burger-menu.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Logo className="header__logo-icon" />
        </div>
        <div className="header__burger-menu">
          <button className="burger-button" type="button">
            <BurgerMenu width="28" height="28" />
          </button>
        </div>
        <nav className="header__navigation">
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <NavLink className="navigation-list__link" href="#home">
                HOME
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink className="navigation-list__link" href="#">
                OFFERING
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink className="navigation-list__link" href="#">
                EXPERIANCE
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink className="navigation-list__link" href="#about">
                ABOUT
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink className="navigation-list__link" href="#contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className=" header__button button" type="button">
          Book
        </button>
      </div>
    </header>
  );
};

export default Header;
