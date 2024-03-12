import React, { FC } from 'react';
import './About.css';

const About: FC = (): React.ReactElement => {
  return (
    <section className='about'>
      <div className='about__container'>
        <h2 className='about__title'>Кого можно проверить</h2>
        <div className='about__columns'>
          <div className='about__column'>
            <div className='about__column-container'>
              <h3 className='about__column-title'>Сотрудника</h3>
              <p className='about__column-text'>Не находится в розыске,не имеет долгов</p>
            </div>
          </div>
          <div className='about__column'>
            <div className='about__column-container'>
              <h3 className='about__column-title'>Водителя</h3>
              <p className='about__column-text'>Не лишён ли водительских прав, не имеет серьезных нарушений ПДД</p>
            </div>
          </div>
          <div className='about__column'>
            <div className='about__column-container'>
              <h3 className='about__column-title'>Самозанятого</h3>
              <p className='about__column-text'>Есть статус самозанятого, не находится в розыске, нет задолженностей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
