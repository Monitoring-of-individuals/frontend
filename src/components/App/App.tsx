/* eslint-disable react/jsx-indent-props */
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../vendor/normalize.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';

const App: FC = (): React.ReactElement => {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);

  const closeAllPopups = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
  };

  const handleOpenSignInPopup = () => {
    setIsSignInPopupOpen(true);
  };

  const handleOpenSignUpPopup = () => {
    setIsSignUpPopupOpen(true);
  };

  return (
    <>
      <Header openSignInPopup={handleOpenSignInPopup} openSignUpPopup={handleOpenSignUpPopup} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/signup"
          element={
            <>
              <SignUpPopup isOpen={isSignUpPopupOpen} onClose={closeAllPopups} />
              <MainPage />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <SignInPopup isOpen={isSignInPopupOpen} onClose={closeAllPopups} />
              <MainPage />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
