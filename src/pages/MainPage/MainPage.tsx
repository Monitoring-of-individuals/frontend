import React, { FC } from 'react';
import './MainPage.css';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Sources from '../../components/Sources/Sources';


const MainPage: FC = (): React.ReactElement => {
  return (
    <main className="main">
      <Landing />
      <About />
      <Sources />
    </main>
  );
};

export default MainPage;
