import axiosClient from "./axiosClient";

const productApi = {
  getAllProducts: () => {
    const url = `api/products/getAllProducts.php`;
    return axiosClient.get(url);
  },

  getAllProductsByUser: () => {
    const url = `api/products/getAllProductByUsername.php`;
    return axiosClient.get(url);
  },

  addProduct: (data) => {
    const url = `api/products/addProduct.php`;
    return axiosClient.post(url, data);
  },

  deleteProduct: (id) => {
    const url = `api/products/deleteProduct.php`;
    return axiosClient.post(url, id);
  },

  updateProduct: (data) => {
    const url = `api/products/updateProduct.php`;
    return axiosClient.post(url, data);
  },

  getProductById: (id) => {
    const url = `api/products/getProductById.php`;
    return axiosClient.post(url, id);
  },
};

export default productApi;
