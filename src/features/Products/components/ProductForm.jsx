import categoryApi from "api/category";
import productApi from "api/products";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

ProductForm.propTypes = {};

function ProductForm(props) {
  const [product, setProduct] = useState({
    nameProduct: "",
    price: "",
    quantity: "",
    images: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);

  const { onSubmit } = props;

  const match = useRouteMatch();
  const { productID } = match.params;

  useEffect(() => {
    // product
    const fetchProduct = async () => {
      const formData = {
        id: productID,
      };
      const data = await productApi.getProductById(formData);
      setProduct(data);
      console.log(data);
    };
    productID && fetchProduct();

    // categories
    const fetchCategory = async () => {
      const categoryList = await categoryApi.getAllCategories();
      setCategories(categoryList);
    };
    fetchCategory();
  }, [productID]);

  const formData = new FormData();
  formData.append("file", product.images);
  formData.append("upload_preset", "qmi1v5yo");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const uploadImage = async () => {
      const resp = await axios.post(
        "https://api.cloudinary.com/v1_1/dzhgirgfh/image/upload",
        formData
      );
      const values = {
        id: productID ? productID : null,
        name: product.nameProduct,
        price: product.price,
        quantity: product.quantity,
        images: resp.data.secure_url,
        id_loai: product.categoryId,
      };
      onSubmit(values);
    };
    uploadImage();
  };

  return (
    <div className="container mt-30">
      <div className="panel panel-primary">
        <div className="panel-heading">
          {productID ? (
            <h2 className="text-center">Sửa Sản Phẩm</h2>
          ) : (
            <h2 className="text-center">Thêm Sản Phẩm</h2>
          )}
        </div>
        <div className="panel-body">
          <form onSubmit={onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Tên sản phẩm</label>
              <input
                value={product.nameProduct}
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Nhập tên sản phẩm"
                onChange={(e) =>
                  setProduct({
                    ...product,
                    nameProduct: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Giá</label>
              <input
                value={product.price}
                type="text"
                className="form-control"
                id="price"
                name="price"
                placeholder="Nhập giá sản phẩm"
                onChange={(e) =>
                  setProduct({
                    ...product,
                    price: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Số lượng</label>
              <input
                value={product.quantity}
                type="text"
                className="form-control"
                id="quantity"
                name="quantity"
                placeholder="Nhập số lượng sản phẩm"
                onChange={(e) =>
                  setProduct({
                    ...product,
                    quantity: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="images">
                Images
              </label>
              <input
                type="file"
                className="form-control form-control-lg"
                id="images"
                onChange={(e) =>
                  setProduct({
                    ...product,
                    images: e.target.files[0],
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="id_category">Chọn danh mục</label>
              <select
                className="form-control"
                name="id_category"
                id="id_category"
                onChange={(e) =>
                  setProduct({
                    ...product,
                    categoryId: e.target.value,
                  })
                }>
                <option>-- Lựa chọn danh mục --</option>
                {categories.map((category, index) => {
                  if (product.categoryId === category.id) {
                    return (
                      <option key={index} selected value={category.id}>
                        {category.name}
                      </option>
                    );
                  } else {
                    return (
                      <option key={index} value={category.id}>
                        {category.name}
                      </option>
                    );
                  }
                })}
              </select>
            </div>

            {productID ? (
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

export default ProductForm;
