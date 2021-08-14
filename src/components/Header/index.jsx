import React from "react";
import { NavLink } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">
            ShopBee
          </NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
