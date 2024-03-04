import React, { FC } from 'react';
import './Landing.css';
import report from '../../images/report_example.svg';

const Landing: FC = (): React.ReactElement => {
  return (
    <section className='landing'>
      <div className='landing__container'>
        <div className='landing__preview'>
          <div className='landing__preview-info'>
            <div className='landing__image-wrapper'>
              <img src='' alt='картинка на главной' className='landing__image-img'/>
            </div>
            <h1 className='landing__title'>Быстрая проверка физических лиц</h1>
            <ol className='landing__list'>
              <li className='landing__list-item'>Выберите и оплатите тариф</li>
              <li className='landing__list-item'>Введите данные для проверки</li>
              <li className='landing__list-item'>Получите отчет</li>
            </ol>
            <button type='submit' className='landing__btn'>Получить отчет</button>
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
