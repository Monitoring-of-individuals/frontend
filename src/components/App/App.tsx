import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
        {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
        <Route path="/" element={<></>} />
        <Route path="/signup" element={<SignUpPopup isOpen={isSignUpPopupOpen} onClose={closeAllPopups} />} />
        <Route path="/signin" element={<SignInPopup isOpen={isSignInPopupOpen} onClose={closeAllPopups} />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
