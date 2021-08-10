import React from "react";
import { Link } from "react-router-dom";

CategoryItem.propTypes = {};

function CategoryItem(props) {
  const { categories, onDelete } = props;
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      {categories.map((category, index) => (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td>{category.name}</td>
          <td>{category.created_at}</td>
          <td className="text-center" width="80px">
            <Link to={`/category/add/${category.id}`}>
              <button className="btn btn-success">Sửa</button>
            </Link>
          </td>
          <td className="text-center" width="80px">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(category.id)}>
              Xóa
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CategoryItem;
