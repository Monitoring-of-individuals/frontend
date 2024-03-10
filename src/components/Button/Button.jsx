//  Параметры кнопки
//  isBtnBlue: true - синяя кнопка
//  isBtnDisabled: true - кнопка заблокирована
//  type: submit/button
// btnText: текст на кнопке
//  onClick: передаем функцию при клике
// isButtonLarge: true - кнопка 604px, при false 190px

import clsx from 'clsx';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
	const { btnText, isBtnBlue, isBtnDisabled, type, onClick, isButtonLarge } = props;

	return (
  <button
	className={clsx('btn', {
				btn_blue: isBtnBlue,
				btn_disabled: isBtnDisabled,
				btn_large: isButtonLarge,
			})}
	type={type === 'submit' ? 'submit' : 'button'}
	disabled={isBtnDisabled}
	onClick={onClick}
		>
    {btnText}
  </button>
	);
};

Button.propTypes = {
	btnText: PropTypes.string,
	isBtnBlue: PropTypes.bool,
	isBtnDisabled: PropTypes.bool,
	type: PropTypes.oneOf(['button', 'submit']),
	onClick: PropTypes.func,
	isButtonLarge: PropTypes.bool,
};

Button.defaultProps = {
	btnText: '',
	isBtnBlue: false,
	isBtnDisabled: false,
	type: 'button',
	onClick: undefined,
	isButtonLarge: false,
};

export default Button;
