// Actions constants

const GET_USER_CREDENTIALS: 'GET_USER_CREDENTIALS' = 'GET_USER_CREDENTIALS';
const GET_USER_CREDENTIALS_SUCCESS: 'GET_USER_CREDENTIALS_SUCCESS' = 'GET_USER_CREDENTIALS_SUCCESS';
const GET_USER_CREDENTIALS_FAILURE: 'GET_USER_CREDENTIALS_FAILURE' = 'GET_USER_CREDENTIALS_FAILURE';
const USER_LOGOUT: 'USER_LOGOUT' = 'USER_LOGOUT';
const USER_RESET_FAILURE: 'USER_RESET_FAILURE' = 'USER_RESET_FAILURE';

const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
const PATTERN_NAME = /^(?=.{1,30}$)[а-яёА-ЯЁ]+(?:[-][а-яёА-ЯЁ]+)*$/;
const PATTERN_PASSPORT = /^(\d *){10}$/;
const PATTERN_PASSWORD = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/;

export {
  GET_USER_CREDENTIALS,
  GET_USER_CREDENTIALS_SUCCESS,
  GET_USER_CREDENTIALS_FAILURE,
  USER_LOGOUT,
  USER_RESET_FAILURE,
  EMAIL_REGEXP,
  PATTERN_NAME,
  PATTERN_PASSPORT,
  PATTERN_PASSWORD,
};
