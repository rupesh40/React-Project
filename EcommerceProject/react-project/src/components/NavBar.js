import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navabr-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul> 
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus"/>
            my cart
          </button>
        </Link>
      </nav>
    );
  }
}
