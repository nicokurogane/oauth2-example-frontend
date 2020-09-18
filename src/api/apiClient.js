import axios from "axios";
import { getAccessToken as getAccessTokenFromLocalStorage } from "../utils/storage/storage";

const axiosClient = axios.create({
  baseURL: "https://nestjs-oauth2-demo-v2.herokuapp.com/",
});

export default axiosClient;

export const getAuthorize = async () => {
  return await axiosClient.get("azure/auth/authorize");
};

export const getAccessToken = async (code, state, cancelToken = {}) => {
  const options = { params: { code, state } };
  return await axiosClient.get("azure/auth/token", options);
};

export const getUserProfile = async () => {
  const accessToken = getAccessTokenFromLocalStorage();

  const options = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  return await axiosClient.get("azure/users/me", options);
};
