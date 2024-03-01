import React, { FC } from 'react';
import './MainPage.css';

const MainPage: FC = (): React.ReactElement => {
  return (
    <main className='main'>
      <div className='main__container'>
        <section className='main__preview'>
          <div className='main__preview-info'>
            <div className='main__image-wrapper'>
              <img src='' alt='картинка на главной' className='main__image-img'/>
            </div>
            <h1 className='main__title'>Быстрая проверка физических лиц</h1>
            <ol className='main__list'>
              <li className='main__list-item'>Выберите и оплатите тариф</li>
              <li className='main__list-item'>Введите данные для проверки</li>
              <li className='main__list-item'>Получите отчет</li>
            </ol>
            <button type='submit' className='main__btn'>Получить отчет</button>
          </div>
          <div className='main__preview-form'/>
        </section>
      </div>
    </main>
  )
}

export default MainPage;
