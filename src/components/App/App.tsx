/* eslint-disable react/jsx-indent-props */
import React, { FC } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../../vendor/normalize.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import Report from '../../pages/Report/Report';
import AuthorisedUserPage from '../../pages/AuthorisedUserPage/AuthorisedUserPage';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';

const App: FC = (): React.ReactElement => {
  const navigate = useNavigate();

  const closeAllPopups = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/report" element={<Report />} />
        <Route
          path="/signup"
          element={
            <>
              <SignUpPopup onClose={closeAllPopups} />
              <MainPage />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <SignInPopup onClose={closeAllPopups} />
              <MainPage />
            </>
          }
        />
        <Route
          path="/registereduser"
          element={<ProtectedRouteElement element={<AuthorisedUserPage />} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
