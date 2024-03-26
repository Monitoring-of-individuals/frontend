import {
  GET_USER_CREDENTIALS,
  GET_USER_CREDENTIALS_SUCCESS,
  GET_USER_CREDENTIALS_FAILURE,
  USER_LOGOUT,
  USER_RESET_FAILURE,
} from '../../utils/constants';
import { registerUser, loginUser as loginUserApi } from '../../utils/Api';
import { AppDispatch } from './types';

interface IFetchUserProcessingAction {
  readonly type: typeof GET_USER_CREDENTIALS;
}

interface IFetchUserSuccessAction {
  readonly type: typeof GET_USER_CREDENTIALS_SUCCESS;
  firstName: string;
  lastName: string;
  email: string;
}

interface IFetchUserFailureAction {
  readonly type: typeof GET_USER_CREDENTIALS_FAILURE;
  failureMessage?: string;
}

interface ILogOutUserAction {
  readonly type: typeof USER_LOGOUT;
}

interface IUserResetFailureAction {
  readonly type: typeof USER_RESET_FAILURE;
}

export type UTUserActions =
  | IFetchUserProcessingAction
  | IFetchUserSuccessAction
  | IFetchUserFailureAction
  | ILogOutUserAction
  | IUserResetFailureAction;

const createUser = (firstName: string, lastName: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_CREDENTIALS,
    });

    return registerUser(firstName, lastName, email, password)
      .then((res) => {
        dispatch({
          type: GET_USER_CREDENTIALS_SUCCESS,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_CREDENTIALS_FAILURE,
          failureMessage: err.message,
        });
        console.error(err.message);
      });
  };
};

const loginUser = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_USER_CREDENTIALS,
  });

  return loginUserApi(email, password)
    .then((res) => {
      dispatch({
        type: GET_USER_CREDENTIALS_SUCCESS,
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_CREDENTIALS_FAILURE,
        failureMessage: err.message,
      });
      console.error(err);
    });
};

const logOutUser = (): ILogOutUserAction => ({
  type: USER_LOGOUT,
});

const userResetFailure = (): IUserResetFailureAction => ({
  type: USER_RESET_FAILURE,
});

export { createUser, loginUser, logOutUser, userResetFailure };
