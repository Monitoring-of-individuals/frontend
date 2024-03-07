import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  openSignUpPopup: () => void;
  openSignInPopup: () => void;
}

const Header: FC<HeaderProps> = ({ openSignUpPopup, openSignInPopup }): React.ReactElement => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="" alt="logo" className="header__logo-img" />
        </div>
        <ul className="header__auth">
          <li className="header__auth-item">
            <Link to="/signup" className="header__button" onClick={openSignUpPopup}>
              Регистрация
            </Link>
          </li>
          <li className="header__auth-item">
            <Link to="/signin" className="header__button" onClick={openSignInPopup}>
              Вход
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
