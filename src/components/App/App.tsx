import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App: FC = (): React.ReactElement => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<></>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
