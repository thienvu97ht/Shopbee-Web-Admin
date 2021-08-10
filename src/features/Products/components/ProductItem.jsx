import React from "react";
import { Link } from "react-router-dom";

ProductItem.propTypes = {};

function ProductItem(props) {
  const { products, onDelete } = props;
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      {products.map((product, index) => (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td className="text-center">
            <img src={product.images} alt="" style={{ maxWidth: 120 }} />
          </td>
          <td>{product.nameProduct}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>{product.nameCategory}</td>
          <td>{product.create_at}</td>
          <td className="text-center" width="80px">
            <Link to={`/products/add/${product.id}`}>
              <button className="btn btn-success">Sửa</button>
            </Link>
          </td>
          <td className="text-center" width="80px">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(product.id)}>
              Xóa
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ProductItem;
