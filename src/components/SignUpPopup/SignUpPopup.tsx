/* eslint-disable react/jsx-indent-props */
import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from '../../services/hooks/reduxHooks';
import { createUser } from '../../services/actions/userActions';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { EMAIL_REGEXP, PATTERN_NAME, PATTERN_PASSWORD } from '../../utils/constants';

interface SignUpPopupProps {
  onClose: () => void;
}

const SignUpPopup: FC<SignUpPopupProps> = ({ onClose }): React.ReactElement => {
  const dispatch = useDispatch();
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

  const handleSubmitForm = () => {
    if (watch('password') !== watch('passwordConfirm')) return;
    dispatch(
      createUser(watch('firstName'), watch('lastName'), watch('email'), watch('password'))
    ).then(() => {
      navigate('/');
    });
  };

  const firstNameError: string | undefined = errors?.firstName?.message?.toString();
  const lastNameError = errors?.lastName?.message?.toString();
  const emailError = errors?.email?.message?.toString();
  const passwordError = errors?.password?.message?.toString();
  const persDataError = errors?.dataCheckbox?.message?.toString();
  const policiError = errors?.privacyCheckbox?.message?.toString();

  return (
    <PopupWithForm
      title="Регистрация"
      name="signUp"
      buttonText="Зарегистрироваться"
      onClose={onClose}
      onSubmit={handleSubmit(handleSubmitForm)}
      isFormValid={isValid}
    >
      <div className="popup__input-container">
        <label className="popup__custom-input">
          <input
            type="text"
            id="popup__name"
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            required
            {...register('firstName', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
              maxLength: {
                value: 30,
                message: 'Максимум 30 символов',
              },
              pattern: {
                value: PATTERN_NAME,
                message: 'Введены недопустимые символы',
              },
            })}
          />
          <span className="registerForm__error">{firstNameError}</span>
        </label>
        <label className="popup__custom-input">
          <input
            type="text"
            id="popup__surname"
            placeholder="Фамилия"
            className="popup__input popup__input_type_surname"
            required
            {...register('lastName', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
              maxLength: {
                value: 30,
                message: 'Максимум 30 символов',
              },
              pattern: {
                value: PATTERN_NAME,
                message: 'Введены недопустимые символы',
              },
            })}
          />
          <span className="registerForm__error">{lastNameError}</span>
        </label>
        <label className="popup__custom-input">
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
          <span className="registerForm__error">{emailError}</span>
        </label>
        <label className="popup__custom-input popup__custom-input_type-password">
          <input
            type={showPassword ? 'text' : 'password'}
            id="popup__password"
            placeholder="Пароль"
            className="popup__input popup__input_type_password"
            required
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              maxLength: {
                value: 40,
                message: 'Пароль не более 40 символов',
              },
              minLength: {
                value: 8,
                message: 'Пароль не менее 8-ми символов',
              },
              pattern: {
                value: PATTERN_PASSWORD,
                message:
                  'Минимум 8 символов, одна цифра, одна буква в верхнем регистре и одна в нижнем',
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
          <span className="registerForm__error">{passwordError}</span>
        </label>
        <label className="popup__custom-input popup__custom-input_type-password">
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
        </label>
        <label className="popup__checkbox-container">
          <label htmlFor="data-checkbox">
            <input
              type="checkbox"
              id="data-checkbox"
              required
              {...register('dataCheckbox', {
                required: 'Необходимо принять согласие на обработку персональных данных',
              })}
            />
            <span className="checkbox-custom">{}</span>
            <span>Согласие на обработку персональных данных</span>
            <span className="registerForm__error">{persDataError}</span>
          </label>
          <label htmlFor="privacy-checkbox">
            <input
              type="checkbox"
              id="privacy-checkbox"
              required
              {...register('privacyCheckbox', {
                required: 'Необходимо принять политику конфиденциальности',
              })}
            />
            <span className="checkbox-custom">{}</span>
            <span>Политика конфиденциальности</span>
            <span className="registerForm__error">{policiError}</span>
          </label>
        </label>
      </div>
    </PopupWithForm>
  );
};

export default SignUpPopup;
