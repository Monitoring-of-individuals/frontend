import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App: FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
        <Route path="/" element={<></>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
