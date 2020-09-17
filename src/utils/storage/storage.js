const ACCESS_TOKEN_KEY = "refresh_token";

const saveAccessToken = (arrayTaskToAdd) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(arrayTaskToAdd));
};

const deleteAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

const getAccessToken = () => {
  if (localStorage.getItem(ACCESS_TOKEN_KEY) !== null)
    return JSON.parse(localStorage.getItem(this.TASK_ARRAY_KEY));
  else return "";
};
