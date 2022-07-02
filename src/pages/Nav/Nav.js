import React from 'react';
import './Nav.css';
import logo from '../../images/Academy_logo.png';
import down_arrow from '../../images/down_arrow.png';
import burger_icon from '../../images/burger_icon.png';

const Nav = () => {
  return (
    <nav title="navbar" className="nav">
      <div className="nav__logo">
        <figure>
          <img className="nav__logo__image" src={logo} alt="academy logo" />
        </figure>
        <figcaption className="nav__logo__title">BJIT Academy</figcaption>
      </div>
      <ul className="nav__link__container">
        <li className="nav__link__container__link">HOME</li>
        <li className="nav__link__container__link nav__link__active">
          TRAINING{" "}
          <span className="nav__link__container__down__icon">
            <img src={down_arrow} alt="down arrow" />
          </span>
        </li>
        <li data-testid="link-1" className="nav__link__container__link">
          ABOUT
        </li>
        <li className="nav__link__container__link">CONTACT</li>
        <li className="nav__link__container__burger__icon">
            <img src={burger_icon} alt="burger icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;