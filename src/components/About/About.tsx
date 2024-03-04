import React, { FC } from 'react';
import './About.css';

const About: FC = (): React.ReactElement => {
  return (
    <section className='about'>
      <div className='about__container'>
        <h2 className='about__title'>О сервисе</h2>
        <div className='about__columns'>
          <div className='about__column'>
            <h3 className='about__column-title'>Помогаем быть уверенными в своих партнерах и сотрудниках</h3>
            <p className='about__column-text'>Узнайте информацию о водителе, индивидуальном предпринимателе, новом сотруднике,</p>
            <div className='about__image-wrapper'>
              <img src='' alt='картинка в колонке' className='about__image-img'/>
            </div>
          </div>
          <div className='about__column'>
            <h3 className='about__column-title'>Информация из государственных открытых источников</h3>
            <p className='about__column-text'>Получайте актуальную информацию из надежных баз данных</p>
            <div className='about__image-wrapper'>
              <img src='' alt='картинка в колонке' className='about__image-img'/>
            </div>
          </div>
          <div className='about__column'>
            <h3 className='about__column-title'>Быстрое получение данных в удобном формате</h3>
            <p className='about__column-text'>Удобная форма ввода и вывода данных отчета, как с компьютера так и с телефона</p>
            <div className='about__image-wrapper'>
              <img src='' alt='картинка в колонке' className='about__image-img'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
