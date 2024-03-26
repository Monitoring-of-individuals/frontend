import React, { FC } from 'react';
import './Landing.css';
import report from '../../images/reportOnLanding.svg';

const Landing: FC = (): React.ReactElement => {
  return (
    <section className='landing'>
      <div className='landing__container'>
        <div className='landing__preview'>
          <div className='landing__preview-info'>
            <h1 className='landing__title'>Быстрая проверка физических лиц</h1>
            <p className='landing__subtitle'>Введите данные для проверки и получите отчет</p>
            <button type='submit' className='landing__btn link'>Попробовать</button>
          </div>
          <div className='landing__preview-form'>
            <div className='landing__form-image'>
              <img src={report} alt='превью формы запроса' className='landing__form-img'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;
