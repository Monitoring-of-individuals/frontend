/* eslint-disable react/jsx-indent-props */
import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { registerUser } from '../../utils/Api';
import { EMAIL_REGEXP } from '../../utils/constants';

interface SignUpPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpPopup: FC<SignUpPopupProps> = ({ isOpen, onClose }): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  function togglePasswordVisibility(): void {
    setShowPassword(!showPassword);
  }

  function handleKeyPress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter') {
      togglePasswordVisibility();
    }
  }

  function handleSubmitForm() {
    if (watch('password') !== watch('passwordConfirm')) return;
    registerUser(watch('firstName'), watch('lastName'), watch('email'), watch('password'))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <PopupWithForm
      title="Регистрация"
      name="signUp"
      buttonText="Зарегистрироваться"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(handleSubmitForm)}
      isFormValid={isValid}
    >
      <div className="popup__input-container">
        <div className="popup__custom-input">
          <input
            type="text"
            id="popup__name"
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            required
            {...register('firstName', {
              required: 'Текст должен содержать не менее 2-х символов',
              maxLength: {
                value: 40,
                message: 'Текст должен содержать не более 40 символов',
              },
              minLength: {
                value: 2,
                message: 'Текст должен содержать не менее 2-х символов',
              },
            })}
          />
        </div>
        <div className="popup__custom-input">
          <input
            type="text"
            id="popup__surname"
            placeholder="Фамилия"
            className="popup__input popup__input_type_surname"
            required
            {...register('lastName', {
              required: 'Текст должен содержать не менее 2-х символов',
              maxLength: {
                value: 40,
                message: 'Текст должен содержать не более 40 символов',
              },
              minLength: {
                value: 2,
                message: 'Текст должен содержать не менее 2-х символов',
              },
            })}
          />
        </div>
        <div className="popup__custom-input">
          <input
            type="url"
            id="popup__signup"
            placeholder="Почта"
            className="popup__input popup__input_type_email"
            required
            {...register('email', {
              required: 'Текст должен содержать не менее 2-х символов',
              maxLength: {
                value: 40,
                message: 'Текст должен содержать не более 40 символов',
              },
              minLength: {
                value: 2,
                message: 'Текст должен содержать не менее 2-х символов',
              },
              pattern: {
                value: EMAIL_REGEXP,
                message: 'Введите корректный адресс электронной почты',
              },
            })}
          />
        </div>
        <div className="popup__custom-input popup__custom-input_type-passoword">
          <input
            type={showPassword ? 'text' : 'password'}
            id="popup__password"
            placeholder="Пароль"
            className="popup__input popup__input_type_password"
            required
            {...register('password', {
              required: 'Текст должен содержать не менее 2-х символов',
              maxLength: {
                value: 40,
                message: 'Текст должен содержать не более 40 символов',
              },
              minLength: {
                value: 2,
                message: 'Текст должен содержать не менее 2-х символов',
              },
            })}
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
            className="popup__input popup__input_type_password"
            required
            {...register('passwordConfirm', {
              required: 'Текст должен содержать не менее 2-х символов',
              maxLength: {
                value: 40,
                message: 'Текст должен содержать не более 40 символов',
              },
              minLength: {
                value: 2,
                message: 'Текст должен содержать не менее 2-х символов',
              },
            })}
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
