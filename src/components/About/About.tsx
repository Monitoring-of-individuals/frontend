import React, { FC } from 'react';
import './About.css';
import manager from '../../images/manager.svg';
import car from '../../images/car.svg';
import laptop from '../../images/laptop.svg';

const About: FC = (): React.ReactElement => {
  return (
    <section className='about'>
      <div className='about__container'>
        <h2 className='about__title'>Кого можно проверить</h2>
        <div className='about__columns'>
          <div className='about__column'>
            <div className='about__column-container'>
              <div className='about__image-background'>
                <div className='about__image-container'>
                  <img src={manager} alt="logo" className='about__image-img' />
                </div>
              </div>
              <h3 className='about__column-title'>Сотрудника</h3>
              <p className='about__column-text'>Подтверждение документов, наличие действующих исполнительных делопроизводств</p>
            </div>
          </div>
          <div className='about__column'>
            <div className='about__column-container'>
              <div className='about__image-background'>
                <div className='about__image-container'>
                  <img src={car} alt="logo" className='about__image-img' />
                </div>
              </div>
              <h3 className='about__column-title'>Водителя</h3>
              <p className='about__column-text'>Действительность водительских прав, стаж вождения, страховые случаи, аварии</p>
            </div>
          </div>
          <div className='about__column'>
            <div className='about__column-container'>
              <div className='about__image-background'>
                <div className='about__image-container'>
                  <img src={laptop} alt="logo" className='about__image-img' />
                </div>
              </div>
              <h3 className='about__column-title'>Самозанятого</h3>
              <p className='about__column-text'>Наличие официального статуса, исполнительных делопроизводств, судимостей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
