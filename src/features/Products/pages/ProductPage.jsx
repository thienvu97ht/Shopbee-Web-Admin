import productApi from "api/products";
import React from "react";
import { useHistory } from "react-router-dom";
import ProductForm from "../components/ProductForm";

ProductPage.propTypes = {};

function ProductPage(props) {
  const history = useHistory();

  const handleProduct = (values) => {
    if (values.id) {
      const updateProduct = async () => {
        const resp = await productApi.updateProduct(values);
        resp.message === "Success" && history.push("/products");
      };
      updateProduct();
    } else {
      console.log(values);
      const addProduct = async () => {
        const resp = await productApi.addProduct(values);
        resp.message === "Success" && history.push("/products");
      };
      addProduct();
    }
  };

  return <ProductForm onSubmit={handleProduct} />;
}

export default ProductPage;
