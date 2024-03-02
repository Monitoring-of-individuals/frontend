import React, { FC } from 'react';
import './MainPage.css';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';

const MainPage: FC = (): React.ReactElement => {
  return (
    <main className='main'>
      <Landing />
      <About />
    </main>
  )
}

export default MainPage;
