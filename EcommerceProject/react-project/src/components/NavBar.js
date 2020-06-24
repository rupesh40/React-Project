import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from 'styled-components';

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
          <ButtonContainer>
            <span className='mr-2'>
            <i className="fas fa-cart-plus"/>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
