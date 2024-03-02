/* eslint-disable react/jsx-indent-props */
import React, { FC } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

interface SignUpPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpPopup: FC<SignUpPopupProps> = ({ isOpen, onClose }): React.ReactElement => {
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
      title="Регистрация"
      name="signUp"
      buttonText="Зарегистрироваться"
      isOpen={isOpen}
      onClose={onClose}
      // eslint-disable-next-line react/jsx-no-bind
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <div className="popup__custom-input">
          <input
            type="text"
            id="popup__name"
            placeholder="Имя"
            name="name"
            className="popup__input popup__input_type_name"
            required
          />
        </div>
        <div className="popup__custom-input">
          <input
            type="text"
            id="popup__surname"
            placeholder="Фамилия"
            name="surname"
            className="popup__input popup__input_type_surname"
            required
          />
        </div>
        <div className="popup__custom-input">
          <input
            type="url"
            id="popup__signup"
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
        <div className="popup__custom-input popup__custom-input_type-passoword">
          <input
            type={showPassword ? 'text' : 'password'}
            id="popup__confirm-password"
            placeholder="Подтверждение пароля"
            name="confirmPassword"
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
      <div className="popup__checkbox-container">
        <label htmlFor="data-checkbox">
          <input type="checkbox" id="data-checkbox" />
          <span className="checkbox-custom">{}</span>
          Согласие на обработку персональных данных
        </label>
        <label htmlFor="privacy-checkbox">
          <input type="checkbox" id="privacy-checkbox" />
          <span className="checkbox-custom">{}</span>
          Политика конфиденциальности
        </label>
      </div>
    </PopupWithForm>
  );
};

export default SignUpPopup;
