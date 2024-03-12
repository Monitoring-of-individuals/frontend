import React, { FC } from 'react';
import './Sources.css';
import mvd from '../../images/mvd.svg';
import fns from '../../images/fns.svg';
import fssp from '../../images/fssp.svg';
import gbdd from '../../images/gbdd.svg';
import rosfin from '../../images/rosfin.svg';
import fedres from '../../images/fedres.svg';

const Sources: FC = (): React.ReactElement => {
  return (
    <section className='sources'>
      <div className='sources__container'>
        <h2 className='sources__title'>По каким источникам проверяем</h2>
        <div className='sources__columns'>
          <div className='sources__column'>
            <div className='sources__image-container'>
              <img src={mvd} alt='логотип МВД' className='sources__image-img'/>
            </div>
            <h3 className='source__subtitle'>МВД</h3>
          </div>
          <div className='sources__column'>
            <div className='sources__image-container'>
              <img src={fns} alt='логотип МВД' className='sources__image-img'/>
            </div>
            <h3 className='source__subtitle'>ФНС</h3>
          </div>
          <div className='sources__column'>
            <div className='sources__image-container'>
              <img src={fssp} alt='логотип МВД' className='sources__image-img'/>
            </div>
            <h3 className='source__subtitle'>ФССП</h3>
          </div>
        </div>
        <div className='sources__columns'>
          <div className='sources__column'>
            <div className='sources__image-container'>
              <img src={gbdd} alt='логотип МВД' className='sources__image-img'/>
            </div>
            <h3 className='source__subtitle'>ГИБДД</h3>
          </div>
          <div className='sources__column'>
            <div className='sources__image-container'>
              <img src={rosfin} alt='логотип МВД' className='sources__image-img'/>
            </div>
            <h3 className='source__subtitle'>Росфинмониторинг</h3>
          </div>
          <div className='sources__column'>
            <div className='sources__image-container'>
              <img src={fedres} alt='логотип МВД' className='sources__image-img'/>
            </div>
            <h3 className='source__subtitle'>Федресурс</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sources;
