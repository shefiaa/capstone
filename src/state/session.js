import Cookies from 'js-cookie';

const getSessionToken = () => {
  return Cookies.get('token');
};

const setSessionToken = (token) => {
  Cookies.set('token', token, { expires: 1 });
};

const clearSessionToken = () => {
  Cookies.remove('token');
};

export { getSessionToken, setSessionToken, clearSessionToken };
