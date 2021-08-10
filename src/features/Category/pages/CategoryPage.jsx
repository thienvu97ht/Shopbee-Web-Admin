import categoryApi from "api/category";
import React from "react";
import { useHistory } from "react-router-dom";
import CategoryForm from "../components/CategoryForm";

CategoryPage.propTypes = {};

function CategoryPage(props) {
  const history = useHistory();

  const handleCategory = (values) => {
    if (values.id) {
      const updateCategory = async () => {
        const resp = await categoryApi.updateCategory(values);
        resp.message === "Success" && history.push("/category");
      };
      updateCategory();
    } else {
      const addCategory = async () => {
        const resp = await categoryApi.addCategory(values);
        resp.message === "Success" && history.push("/category");
      };
      addCategory();
    }
  };

  return <CategoryForm onSubmit={handleCategory} />;
}

export default CategoryPage;
