import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_DEV,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  (config) => {
    let authState = window.sessionStorage.getItem("token");

    config.headers.Authorization = `Bearer ${authState}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.clear();
      // cogoToast.warn("Session timed out");
      toast.warn("Session timed out");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.message === "" || response.data.message === undefined) {
        console.log("");
      } else {
        toast.success(response.data.message);
      }
    }
    console.log(response);
    return response;
  },
  (error) => {
    if (!error?.response?.data) {
      return;
    }
    if (error.response.status >= 500) {
      return toast.error(
        error.response.data.error
          ? error.response.data.error
          : "check your internet connection"
      );
    }
    return Promise.reject(error);
  }
);