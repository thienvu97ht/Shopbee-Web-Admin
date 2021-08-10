import productApi from "api/products";
import ProductItem from "features/Products/components/ProductItem";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function ProductListPage(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await productApi.getAllProductsByUser();
      setProducts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  // Ham delete
  const handleDelete = (id) => {
    const formData = {
      id,
    };
    let option = window.confirm(
      "Bạn có chắc chắn muốn xóa danh mục này không?"
    );

    if (!option) return;

    const deleteProduct = async () => {
      const data = await productApi.deleteProduct(formData);
      setProducts(data);
    };

    deleteProduct();
  };

  return (
    <div>
      {" "}
      <div className="container mt-30">
        <div className="panel panel-primary">
          <div className="panel-heading container__title-table">
            <h3 className="panel-title">Quản Lý Sản Phẩm</h3>
            <Link to="/products/add">
              <button className="btn btn-success">Thêm Sản Phẩm</button>
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
                  <th className="text-center">Hình Ảnh</th>
                  <th className="text-center">Tên Sản Phẩm</th>
                  <th className="text-center">Giá Bán</th>
                  <th className="text-center">Số lượng</th>
                  <th className="text-center">Danh Mục</th>
                  <th className="text-center">Ngày Tạo</th>
                  <th colSpan="2" className="text-center">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                <ProductItem products={products} onDelete={handleDelete} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
