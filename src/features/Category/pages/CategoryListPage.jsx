import categoryApi from "api/category";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CategoryItem from "../components/CategoryItem";

function CategoryListPage(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await categoryApi.getAllCategories();

      setCategories(data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const formData = {
      id,
    };
    let option = window.confirm(
      "Bạn có chắc chắn muốn xóa danh mục này không?"
    );

    if (!option) return;

    const deleteCategory = async () => {
      const data = await categoryApi.deleteCategory(formData);
      setCategories(data);
    };

    deleteCategory();
  };

  return (
    <div>
      {" "}
      <div className="container mt-30">
        <div className="panel panel-primary">
          <div className="panel-heading container__title-table">
            <h3 className="panel-title">Quản Lý Loại Sản Phẩm</h3>
            <Link to="/category/add">
              <button className="btn btn-success">Thêm Loại Sản Phẩm</button>
            </Link>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="s">Tìm kiếm</label>
                <input
                  type="text"
                  className="form-control"
                  id="s"
                  placeholder="Searching..."
                  name="s"
                />
              </div>
            </form>

            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center" width="50px">
                    STT
                  </th>
                  <th className="text-center">Tên Loại Sản Phẩm</th>
                  <th className="text-center">Ngày Tạo</th>
                  <th colSpan="2" className="text-center">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                <CategoryItem categories={categories} onDelete={handleDelete} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryListPage;
