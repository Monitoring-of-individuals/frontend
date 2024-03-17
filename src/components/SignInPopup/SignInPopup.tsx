import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/Api';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { EMAIL_REGEXP } from '../../utils/constants';

interface SignInPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInPopup: FC<SignInPopupProps> = ({ isOpen, onClose }): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
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
    loginUser(watch('email'), watch('password'))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const emailError = errors?.email?.message?.toString();

  return (
    <PopupWithForm
      title="Вход"
      name="signIn"
      buttonText="Войти"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(handleSubmitForm)}
      isFormValid={isValid}
    >
      <div className="popup__input-container">
        <label className="popup__custom-input">
          <input
            type="url"
            id="popup__signin"
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
          <span className="authForm__error">{emailError}</span>
        </label>
        <label className="popup__custom-input popup__custom-input_type-passoword">
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
        </label>
      </div>
    </PopupWithForm>
  );
};

export default SignInPopup;
