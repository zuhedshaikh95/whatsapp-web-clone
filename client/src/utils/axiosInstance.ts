import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.SERVER_API_URL,
  withCredentials: true,
});

export default axiosInstance;
