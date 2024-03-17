import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.scss';

interface PopupWithFormProps {
  title: string;
  name: string;
  buttonText: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  isFormValid: boolean;
}

const PopupWithForm: FC<PopupWithFormProps> = ({
  title,
  name,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
  isFormValid,
}): React.ReactElement => {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container ${name === 'signUp' ? 'popup_signUp' : ''}`}>
        <form className={`popup__form popup__${name}-form`} noValidate onSubmit={onSubmit}>
          <div className="popup__title-container">
            <h2 className="popup__title">{title}</h2>
            <button className="popup__close-button" type="button" onClick={onClose}>
              {}
            </button>
          </div>
          {children}
          <button type="submit" className="popup__save-button" disabled={!isFormValid}>
            {buttonText}
          </button>
        </form>
        {name === 'signIn' && (
          <div className="popup__link-container">
            Ещё нет аккаунта?
            <Link className="popup__link" to="/signup">
              Зарегистрируйтесь
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopupWithForm;
