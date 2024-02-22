import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <svg className="logo-icon">
            <a href="#home">
              <use href="../assets/icons/icons.svg#logo"></use>{" "} 
            </a>
          </svg>
        </div>
        <div className="burger-menu">
          <button className="burger-button" type="button">
            <svg width="28" height="28">
              <use
                stroke="rgba(46, 47, 66, 1)"
                href="../assets/icons/icons.svg#burger-menu"
              ></use>
            </svg>
          </button>
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <NavLink className="navigation-link" href="#home">HOME</NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className='navigation-link' href="#">OFFERING</NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className='navigation-link' href="#">EXPERIANCE</NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className='navigation-link' href="#about">ABOUT</NavLink>
            </li>
            <li className="navigation-item">
              <NavLink className='navigation-link' href="#contact">CONTACT</NavLink>
            </li>
          </ul>
        </nav>
        <button className="button header-button" type="button">Book</button>
      </div>
    </header>
  );
};

export default Header;
