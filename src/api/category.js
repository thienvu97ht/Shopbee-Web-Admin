import axiosClient from "./axiosClient";

const categoryApi = {
  getAllCategories: () => {
    const url = `api/category/getAllCategory.php`;
    return axiosClient.get(url);
  },

  addCategory: (data) => {
    const url = `api/category/addCategory.php`;
    return axiosClient.post(url, data);
  },

  deleteCategory: (id) => {
    const url = `api/category/deleteCategory.php`;
    return axiosClient.post(url, id);
  },

  updateCategory: (data) => {
    const url = `api/category/updateCategory.php`;
    return axiosClient.post(url, data);
  },

  getCategoryById: (id) => {
    const url = `api/category/getCategoryById.php`;
    return axiosClient.post(url, id);
  },
};

export default categoryApi;
