import React, { FC } from 'react';
import './MainPage.css';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Sources from '../../components/Sources/Sources';
import Services from '../../components/Services/Services';


const MainPage: FC = (): React.ReactElement => {
  return (
    <main className="main">
      <Landing />
      <Services />
      <About />
      <Sources />
    </main>
  );
};

export default MainPage;
