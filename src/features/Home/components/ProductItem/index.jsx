import React from "react";

ProductItem.propTypes = {};

function ProductItem(props) {
  const { products } = props;

  return (
    <>
      {products.map((product, index) => (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td className="text-center">
            <img src={product.images[0].url} alt="" style={{ maxWidth: 120 }} />
          </td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.categories}</td>
          <td>{product.created_at}</td>
          <td className="text-center" width="80px">
            <a href="!#">
              <button className="btn btn-success">Sửa</button>
            </a>
          </td>
          <td className="text-center" width="80px">
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ProductItem;
