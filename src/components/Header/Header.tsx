import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

interface HeaderProps {
  openSignUpPopup: () => void;
  openSignInPopup: () => void;
}

const Header: FC<HeaderProps> = ({ openSignUpPopup, openSignInPopup }): React.ReactElement => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to='/' className='header__link-to-main'>
          <div className="header__logo">
            <img src={logo} alt="logo" className="header__logo-img" />
          </div>
          <p className='header__monitoring link'>Мониторинг физических лиц</p>
        </Link>
        <nav className='header__nav'>
          <ul className='header__auth'>
            <li className='header__auth-item link'>
              <button type='button' className='header__button link'>
                <Link to='/signup' className='header__button-link' onClick={openSignUpPopup}>
                  Регистрация
                </Link>
              </button>
            </li>
            <li className='header__auth-item link'>
              <button type='button' className='header__button link'>
                <Link to='/signin' className='header__button-link' onClick={openSignInPopup}>
                  Вход
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
