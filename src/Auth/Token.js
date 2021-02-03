export const getUserToken = () => {
  return sessionStorage.getItem('TOKEN');
};

export const setUserToken = userToken => {
  sessionStorage.setItem('TOKEN', userToken);
};

export const clearUserToken = () => {
  sessionStorage.setItem('TOKEN', '');
};
