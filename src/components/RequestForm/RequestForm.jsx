/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';

import styles from './RequestForm.module.css';
import checkMark from '../../images/check-mark.svg';
import Button from '../Button/Button';
import { PATTERN_NAME, PATTERN_PASSPORT } from '../../utils/constants';

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
  const [todayDate, setTodayDate] = useState(new Date());

  registerLocale('ru', ru);

  const handleResetForm = () => {
    reset();
  };

  const onSubmit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.dateOfBirth = data.dateOfBirth.toLocaleDateString();
    // eslint-disable-next-line no-param-reassign
    data.dateOfLicence = data?.dateOfLicence?.toLocaleDateString() || '';
    // eslint-disable-next-line no-alert
    return alert(JSON.stringify(data));
  };

  return (
    <section className={styles.formSection}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.formTitle}>Введите данные для проверки</h2>
        <div className={styles.formBlock}>
          <label htmlFor="last-name" className={styles.inputTitle}>
            Фамилия
            <input
              id="last-name"
              className={styles.input}
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
          </label>
          <p className={styles.error}>{errors?.lastName?.message}</p>
          <label htmlFor="first-name" className={styles.inputTitle}>
            Имя
            <input
              id="first-name"
              className={styles.input}
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
            <p className={styles.error}>{errors?.firstName?.message}</p>
          </label>
          <label htmlFor="father-name" className={styles.inputTitle}>
            Отчество
            <input
              id="father-name"
              className={styles.input}
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
                  value: PATTERN_NAME,
                  message: 'Введены недопустимые символы',
                },
              })}
            />
            <p className={styles.error}>{errors?.fatherName?.message}</p>
          </label>

          <Controller
            control={control}
            name="dateOfBirth"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="date-of-birth" className={styles.inputTitle}>
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
                  className={`${styles.input} ${styles.inputDate}`}
                />
              </label>
            )}
          />

          <label htmlFor="passport" className={styles.inputTitle}>
            Серия и номер паспорта
            <input
              id="passport"
              className={styles.input}
              {...register('passport', {
                required: 'Поле обязательно к заполнению',

                pattern: {
                  value: PATTERN_PASSPORT,
                  message: 'Введите серию и номер паспорта в виде 4000980015',
                },
                maxLength: {
                  value: 10,
                  message: 'Максимум 10 символов',
                },
              })}
            />
          </label>
          <p className={styles.error}>{errors?.passport?.message}</p>
          <div className={styles.drivingBlock}>
            <label htmlFor="driving-licence" className={styles.inputTitle}>
              Водительское удостоверение
              <input
                id="driving-licence"
                className={`${styles.input} ${styles.inputSmall}`}
                {...register('drivingLicence', {
                  pattern: {
                    value: PATTERN_PASSPORT,
                    message: 'Введите водительское удостоверения в виде 4000980015',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Максимум 10 символов',
                  },
                })}
              />
              <p className={styles.error}>{errors?.drivingLicence?.message}</p>
            </label>

            <Controller
              control={control}
              name="dateOfLicence"
              render={({ field: { onChange, onBlur, value } }) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label htmlFor="date-of-licence" className={styles.inputTitle}>
                  Дата выдачи водительского удостоверения
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
                    className={`${styles.input} ${styles.inputMedium}`}
                  />
                </label>
              )}
            />
          </div>
        </div>
        <div className={styles.btnBlock}>
          <Button type="submit" btnText="Получить отчет" isBtnBlue isBtnDisabled={!isValid} />
          <Button
            type="button"
            btnText="Очистить форму"
            isBtnBlue={false}
            isBtnDisabled={false}
            onClick={handleResetForm}
            isButtonLarge={false}
          />
        </div>
      </form>
      <div className={styles.description}>
        <ul className={styles.descriptionTitle}>Проверка по следующим параметрам</ul>
        <li className={styles.descriptionBlock}>
          <img className={styles.descriptionCheckMark} src={checkMark} alt="галка" />
          <p className={styles.descriptionText}>Наличие исполнительных производств</p>
        </li>
        <li className={styles.descriptionBlock}>
          <img className={styles.descriptionCheckMark} src={checkMark} alt="галка" />
          <p className={styles.descriptionText}>Узнать ИНН</p>
        </li>
        <li className={styles.descriptionBlock}>
          <img className={styles.descriptionCheckMark} src={checkMark} alt="галка" />
          <p className={styles.descriptionText}>Действительность паспорта</p>
        </li>
        <li className={styles.descriptionBlock}>
          <img className={styles.descriptionCheckMark} src={checkMark} alt="галка" />
          <p className={styles.descriptionText}>Наличие банкротства</p>
        </li>
        <li className={styles.descriptionBlock}>
          <img className={styles.descriptionCheckMark} src={checkMark} alt="галка" />
          <p className={styles.descriptionText}>Действительность водительских прав</p>
        </li>
        <li className={styles.descriptionBlock}>
          <img className={styles.descriptionCheckMark} src={checkMark} alt="галка" />
          <p className={styles.descriptionText}>Является ли человек самозанятым</p>
        </li>
        <li className={styles.descriptionBlock}>
          <img className={styles.descriptionCheckMark} src={checkMark} alt="галка" />
          <p className={styles.descriptionText}>Проверка на террориста</p>
        </li>
      </div>
    </section>
  );
};
export default RequestForm;
