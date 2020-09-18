const ACCESS_TOKEN_KEY = "access_token";
const TOKEN_TYPE_KEY = "token_type";

export const saveAccessToken = (arrayTaskToAdd) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(arrayTaskToAdd));
};

export const saveTokenType = (tokenType) => {
  localStorage.setItem(TOKEN_TYPE_KEY, JSON.stringify(tokenType));
};

export const deleteAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const deleteTokenType = () => {
  localStorage.removeItem(TOKEN_TYPE_KEY);
};

export const getAccessToken = () => {
  if (localStorage.getItem(ACCESS_TOKEN_KEY) !== null)
    return JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY));
  else return "";
};

export const getTokenType = () => {
  if (localStorage.getItem(TOKEN_TYPE_KEY) !== null)
    return JSON.parse(localStorage.getItem(TOKEN_TYPE_KEY));
  else return "";
};
