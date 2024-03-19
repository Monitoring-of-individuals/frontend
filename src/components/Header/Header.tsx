import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../images/logo.svg';
import userIcon from '../../images/userIcon.svg';
import './Header.css';
import { RootState } from '../../services/actions/types';

interface HeaderProps {
  openSignUpPopup: () => void;
  openSignInPopup: () => void;
}

const Header: FC<HeaderProps> = ({ openSignUpPopup, openSignInPopup }): React.ReactElement => {
  const currentUser: any = useSelector((state: RootState) => state.currentUser);
  // eslint-disable-next-line no-restricted-syntax
  console.log(currentUser);
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__link-to-main'>
          <div className='header__logo'>
            <img src={logo} alt='logo' className='header__logo-img' />
          </div>
          <p className='header__monitoring link'>Мониторинг физических лиц</p>
        </Link>
        {currentUser.isLoggedIn === false ?
          <nav className='header__nav'>
            <ul className='header__auth'>
              <li className='header__auth-item link'>
                <Link to='/signup' className='header__button-link' onClick={openSignUpPopup}>
                  <button type='button' className='header__button link'>
                    Регистрация
                  </button>
                </Link>
              </li>
              <li className='header__auth-item link'>
                <Link to='/signin' className='header__button-link' onClick={openSignInPopup}>
                  <button type='button' className='header__button link'>
                    Вход
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        :
          <div className='header__user-container link'>
            <p className='header__user-info'>{currentUser.firstName} {currentUser.lastName}</p>
            <div className='header__user-logo'>
              <img src={userIcon} alt='user-logo' className='header__user-logo-img' />
            </div>
          </div> }
      </div>
    </header>
  );
};

export default Header;
