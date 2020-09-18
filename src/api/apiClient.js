import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://nestjs-oauth2-demo-v2.herokuapp.com/",
});

export default axiosClient;

export const getAuthorize = async () => {
  return await axiosClient.get("azure/auth/authorize");
};

export const getAccessToken = async (code, state) => {
  const options = { params: { code, state } };
  return await axiosClient.get("azure/auth/token", options);
};
