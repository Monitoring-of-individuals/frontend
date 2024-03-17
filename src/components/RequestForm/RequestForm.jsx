/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';

import './RequestForm.css';
import checkMark from '../../images/check-mark.svg';
import Button from '../Button/Button';

const RequestForm = () => {
  const {
    register,
    formState: { errors, isValid },
    control,
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });
  // eslint-disable-next-line no-unused-vars
  //  const [selectedDate, setSelectedDate] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [todayDate, setTodayDate] = useState(new Date());

  const patternName = /^(?=.{1,30}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/;
  const patternPassport = /(\d{4})\s*-?\s*(\d{6})/;
  registerLocale('ru', ru);

  const handleResetForm = () => {
    reset();
  };

  const onSubmit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.dateOfBirth = data.dateOfBirth.toLocaleDateString();
    // eslint-disable-next-line no-param-reassign
    data.dateOfLicence = data.dateOfLicence.toLocaleDateString();
    // eslint-disable-next-line no-alert
    return alert(JSON.stringify(data));
  };

  return (
    <form className="request-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="request-form__section">
        <div className="request-form__block">
          <label htmlFor="last-name" className="request-form__input-title">
            Фамилия
            <input
              id="last-name"
              className="request-form__input"
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
                  value: patternName,
                  message: 'Введены недопустимые символы',
                },
              })}
            />
          </label>
          <p className="request-form__error">{errors?.lastName?.message}</p>
          <label htmlFor="first-name" className="request-form__input-title">
            Имя
            <input
              id="first-name"
              className="request-form__input"
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
                  value: patternName,
                  message: 'Введены недопустимые символы',
                },
              })}
            />
            <p className="request-form__error">{errors?.firstName?.message}</p>
          </label>
          <label htmlFor="father-name" className="request-form__input-title">
            Отчество
            <input
              id="father-name"
              className="request-form__input"
              {...register('fatherName', {
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
                  value: patternName,
                  message: 'Введены недопустимые символы',
                },
              })}
            />
            <p className="request-form__error">{errors?.fatherName?.message}</p>
          </label>

          <Controller
            control={control}
            name="dateOfBirth"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="date-of-birth" className="request-form__input-title">
                Дата рождения
                <DatePicker
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                  selected={value}
                  locale="ru"
                  minDate="1900"
                  maxDate={todayDate}
                  showYearDropdown
                  dateFormat="dd.MM.yyyy"
                  scrollableYearDropdown
                  yearDropdownItemNumber={100}
                  changeMonth
                  changeYear
                  className="request-form__input request-form__input_small"
                />
              </label>
            )}
          />

          <label htmlFor="passport" className="request-form__input-title">
            Серия и номер паспорта
            <input
              id="passport"
              className="request-form__input"
              {...register('passport', {
                required: 'Поле обязательно к заполнению',

                pattern: {
                  value: patternPassport,
                  message: 'Введите серию и номер паспорта в виде 4000980015',
                },
              })}
            />
          </label>
          <p className="request-form__error">{errors?.passport?.message}</p>
          <div className="request-form__driving-block">
            <label htmlFor="driving-licence" className="request-form__input-title">
              Водительское удостоверение
              <input
                id="driving-licence"
                className="request-form__input request-form__input_medium"
                {...register('drivingLicence', {
                  pattern: {
                    value: patternPassport,
                    message: 'Введите водительское удостоверения в виде 4000980015',
                  },
                })}
              />
              <p className="request-form__error">{errors?.drivingLicence?.message}</p>
            </label>

            <Controller
              control={control}
              name="dateOfLicence"
              render={({ field: { onChange, onBlur, value } }) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label htmlFor="date-of-licence" className="request-form__input-title">
                  Дата выдачи удостоверения
                  <DatePicker
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched/blur
                    selected={value}
                    locale="ru"
                    minDate="1900"
                    maxDate={todayDate}
                    showYearDropdown
                    dateFormat="dd.MM.yyyy"
                    scrollableYearDropdown
                    yearDropdownItemNumber={100}
                    changeMonth
                    changeYear
                    className="request-form__input request-form__input_small"
                  />
                </label>
              )}
            />
          </div>
        </div>
        <div className="request-form__description">
          <ul className="request-form__description-title">Проверка по следующим параметрам</ul>
          <li className="request-form__description-block">
            <img className="request-form__description-check-mark" src={checkMark} alt="галка" />
            <p className="request-form__description-text">Исполнительные производства</p>
          </li>
          <li className="request-form__description-block">
            <img className="request-form__description-check-mark" src={checkMark} alt="галка" />
            <p className="request-form__description-text">Узнать ИНН</p>
          </li>
          <li className="request-form__description-block">
            <img className="request-form__description-check-mark" src={checkMark} alt="галка" />
            <p className="request-form__description-text">Является ли человек самозанятым</p>
          </li>
          <li className="request-form__description-block">
            <img className="request-form__description-check-mark" src={checkMark} alt="галка" />
            <p className="request-form__description-text">Действительность паспорта</p>
          </li>
          <li className="request-form__description-block">
            <img className="request-form__description-check-mark" src={checkMark} alt="галка" />
            <p className="request-form__description-text">Проверить водительские права</p>
          </li>
          <li className="request-form__description-block">
            <img className="request-form__description-check-mark" src={checkMark} alt="галка" />
            <p className="request-form__description-text">Проверка на террориста</p>
          </li>
          <li className="request-form__description-block">
            <img className="request-form__description-check-mark" src={checkMark} alt="галка" />
            <p className="request-form__description-text">Является ли банкротом</p>
          </li>
        </div>
      </div>
      <div className="btn-block">
        <Button
          type="button"
          btnText="Очистить форму"
          isBtnBlue={false}
          isBtnDisabled={false}
          onClick={handleResetForm}
          isButtonLarge={false}
        />
        <Button type="submit" btnText="Отправить" isBtnBlue isBtnDisabled={!isValid} />
      </div>
    </form>
  );
};
export default RequestForm;
