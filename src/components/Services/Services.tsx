import React, { FC } from 'react';
import './Services.css';

const Services: FC = (): React.ReactElement => {
  return (
    <section className='services'>
      <div className='services__container'>
        <div className='services__columns'>
          <div className='services__column'>
            <h3 className='services__column-title'>Обновить данные сотрудников</h3>
            <p className='services__column-text'>Из открытых источников, сразу для вас</p>
          </div>
          <div className='services__column'>
            <h3 className='services__column-title'>Хранить документы в удобном формате</h3>
            <p className='services__column-text'>Можно скачать и увидеть в личном кабинете</p>
          </div>
          <div className='services__column'>
            <h3 className='services__column-title'>Поможем узнать самое главное</h3>
            <p className='services__column-text'>Действительность документов</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
