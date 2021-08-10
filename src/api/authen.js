import axiosClient from "./axiosClient";

const authenApi = {
  checkLogin: (data) => {
    const url = `api/auth/login.php`;
    return axiosClient.post(url, data);
  },

  register: (data) => {
    const url = `api/auth/register.php`;
    return axiosClient.post(url, data);
  },

  forgotPassword: (data) => {
    const url = `api/auth/sendOTP.php`;
    return axiosClient.post(url, data);
  },

  newPassword: (data) => {
    const url = `api/auth/newPass.php`;
    return axiosClient.post(url, data);
  },
};

export default authenApi;
