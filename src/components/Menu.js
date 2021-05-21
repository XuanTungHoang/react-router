import React, { Component } from 'react';
import {Link, Route } from "react-router-dom";

const menus = [
    {
        name: "Trang chu",
        to: "/",
        exact: true
    },
    {
        name: "Gioi thieu",
        to: "/about",
        exact: false
    },
    {
        name: "San pham",
        to: "/products",
        exact: false
    },
    {
        name: "Dang nhap",
        to: "/login",
        exact: true
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active" : "";
          return (
            <li className={active} >
              <Link to={to} >{label}</Link>
            </li>
          );
        }}
      />
    );
  };

class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;
       // console.log(menus.length);
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            });
        }
        return result;
    }
}

export default Menu;