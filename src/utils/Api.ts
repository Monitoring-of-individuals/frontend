const baseURL = '';
const baseHeaders = {
  'Content-Type': 'application/json',
};

const checkResponse = (res: Response) => {
  if (res.ok) return res.json();
  return res.json().then((err) => Promise.reject(err));
};

interface IcheckResponse {
  success: boolean;
}

type TcheckSuccess<T> = {
  success: boolean;
  json: () => Promise<any>;
} & T;

const checkSuccess = <T>(res: TcheckSuccess<T>): Promise<TcheckSuccess<T>> => {
  if (res && res.success) return Promise.resolve(res);
  return res.json().then((err) => Promise.reject(err));
};

const request = <T>(
  endpoint: string,
  method: string,
  headers?: { [key: string]: string },
  body?: string
): Promise<T> => {
  return fetch(`${baseURL}${endpoint}`, {
    method,
    headers,
    body,
  })
    .then((res) => checkResponse(res))
    .then((res) => checkSuccess(res));
};

interface IRegisterUser extends IcheckResponse {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

export const registerUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<IRegisterUser> =>
  request<IRegisterUser>(
    '/auth/sign-up',
    'POST',
    baseHeaders,
    JSON.stringify({ firstName, lastName, email, password })
  ).then((res: IRegisterUser) => {
    localStorage.setItem('accessToken', res.token);
    return res;
  });

export const loginUser = (email: string, password: string): Promise<IRegisterUser> =>
  request<IRegisterUser>(
    '/auth/sign-in',
    'POST',
    baseHeaders,
    JSON.stringify({ email, password })
  ).then((res: IRegisterUser) => {
    localStorage.setItem('accessToken', res.token);
    return res;
  });
