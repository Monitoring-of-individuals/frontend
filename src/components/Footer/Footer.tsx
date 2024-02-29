import React, { FC } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: FC = (): React.ReactElement => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <ul className='footer__links'>
          <li className='footer__link'>
            <Link to="/#" className='footer__link-policy'>
              Политика конфиденциальности
            </Link>
          </li>
          <li className='footer__link'>
            Связаться с нами <a className='footer__link-mail' href="mailto:monitoringofindividuals@gmail.com">monitoringofindividuals@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;
