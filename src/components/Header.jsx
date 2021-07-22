import React from "react";
import {
  Navbar,
  Button,
  NavbarBrand
} from "reactstrap";

import "../styles/Header.css";
import AdyenLogo from "../assets/adyen-header-logo-green.svg";

const Header = ({ toggle }) => {

  return (
    <div id="header">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" id="adyen-logo">
          <img width="150px" height="auto" src={AdyenLogo} alt="logo" />
        </NavbarBrand>
        <div id="login-button">
          <Button onClick={toggle} color="success">Log In</Button>
        </div>
      </Navbar>
    </div>
  )
};

export default Header;