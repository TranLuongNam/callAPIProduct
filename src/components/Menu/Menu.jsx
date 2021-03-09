import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Danh Sách Sản Phẩm",
    to: "/product-list",
    exact: false,
  },
];
const MenuLink = ({ name, to, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{name}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </div>
    );
  }
  showMenu = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            name={menu.name}
            to={menu.to}
            exact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}
export default Menu;
