import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import axios from "axios";
import "./styles.scss";

ProductListPage.propTypes = {};

function ProductListPage(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://60dd9b0c878c890017fa2a57.mockapi.io/products"
      );
      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-30">
      <div className="panel panel-primary">
        <div className="panel-heading container__title-table">
          <h3 className="panel-title">Quản Lý Sản Phẩm</h3>
          <Link to="/">
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
                <th className="text-center">Danh Mục</th>
                <th className="text-center">Ngày Tạo</th>
                <th colSpan="2" className="text-center">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              <ProductItem products={products} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
