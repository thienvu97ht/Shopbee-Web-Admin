import axiosClient from "./axiosClient";

const userApi = {
  getUser: () => {
    const url = `api/user/getUserProfile.php`;
    return axiosClient.get(url);
  },
};

export default userApi;
