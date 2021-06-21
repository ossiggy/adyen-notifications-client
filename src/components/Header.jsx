import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../styles/Header.css";
import AdyenLogo from "../assets/adyen-header-logo-green.svg";

const Header = () => {
  return (
    <div id="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img width="150px" height="auto" src={AdyenLogo} alt="logo"/>
        </NavbarBrand>
      </Navbar>
    </div>
    )
};

export default Header;