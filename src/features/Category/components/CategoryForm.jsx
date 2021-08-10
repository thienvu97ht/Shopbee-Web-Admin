import categoryApi from "api/category";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

CategoryForm.propTypes = {};

function CategoryForm(props) {
  const [category, setCategory] = useState("");

  const { onSubmit } = props;

  const match = useRouteMatch();
  const { categoryID } = match.params;

  useEffect(() => {
    if (categoryID) {
      const fetchData = async () => {
        const formData = {
          id: categoryID,
        };
        const data = await categoryApi.getCategoryById(formData);

        setCategory(data.name);
      };
      fetchData();
    }
  }, [categoryID]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const values = {
      name: category,
      id: categoryID ? categoryID : null,
    };
    onSubmit(values);
  };

  return (
    <div className="container mt-30">
      <div className="panel panel-primary">
        <div className="panel-heading">
          {categoryID ? (
            <h2 className="text-center">Sửa Loại Sản Phẩm</h2>
          ) : (
            <h2 className="text-center">Thêm Loại Sản Phẩm</h2>
          )}
        </div>
        <div className="panel-body">
          <form onSubmit={onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Tên loại sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Nhập tên loại sản phẩm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            {categoryID ? (
              <button type="submit" className="btn btn-success">
                Sửa
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                Thêm
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoryForm;
