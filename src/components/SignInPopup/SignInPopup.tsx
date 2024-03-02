/* eslint-disable react/jsx-indent-props */
import React, { FC } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

interface SignInPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInPopup: FC<SignInPopupProps> = ({ isOpen, onClose }): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
  }

  function togglePasswordVisibility(): void {
    setShowPassword(!showPassword);
  }

  function handleKeyPress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter') {
      togglePasswordVisibility();
    }
  }

  return (
    <PopupWithForm
      title="Вход"
      name="signIn"
      buttonText="Войти"
      isOpen={isOpen}
      onClose={onClose}
      // eslint-disable-next-line react/jsx-no-bind
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <div className="popup__custom-input">
          <input
            type="url"
            id="popup__signin"
            placeholder="Почта"
            name="email"
            className="popup__input popup__input_type_email"
            required
          />
        </div>
        <div className="popup__custom-input popup__custom-input_type-passoword">
          <input
            type={showPassword ? 'text' : 'password'}
            id="popup__password"
            placeholder="Пароль"
            name="password"
            className="popup__input popup__input_type_password"
            required
          />
          <span
            className="popup__password-toggle"
            onClick={togglePasswordVisibility}
            onKeyDown={handleKeyPress}
            tabIndex={0}
            role="button"
          >
            {}
          </span>
        </div>
      </div>
    </PopupWithForm>
  );
};

export default SignInPopup;
