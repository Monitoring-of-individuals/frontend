import React, { FC } from 'react';
import './Header.css';

const Header: FC = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="" alt="logo" className="header__logo-img" />
        </div>
        <ul className="header__auth">
          <li className="header__auth-item">
            <button type="button" className="header__button">
              Регистрация
            </button>
          </li>
          <li className="header__auth-item">
            <button type="button" className="header__button">
              Вход
            </button>
          </li>
        </ul>
        {/* <button type='button' className='header__user-data'>Иван Иванов</button> */}
      </div>
    </header>
  );
};

export default Header;
