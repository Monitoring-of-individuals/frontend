import React, { FC } from 'react';
import './MainPage.css';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import RequestForm from '../../components/RequestForm/RequestForm';

const MainPage: FC = (): React.ReactElement => {
  return (
    <main className="main">
      <Landing />
      <RequestForm />
      <About />
    </main>
  );
};

export default MainPage;
