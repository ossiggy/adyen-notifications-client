import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  DropdownToggle
} from "reactstrap";

import "../styles/Header.css";
import AdyenLogo from "../assets/adyen-header-logo-green.svg";

const Header = ({ recent, setRecent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleClick = pspReference => {
    setRecent(pspReference);
  };

  let recentPsp;

  if (recent && recent.length) {
    recentPsp = (
      <ButtonDropdown isOpen={isOpen} toggle={toggle} id="recent-searches">
        <DropdownToggle caret outline color="success">
          Recent Searches
        </DropdownToggle>
        <DropdownMenu>
          {recent.map(item => <DropdownItem key={item} onClick={() => handleClick(item)}>{item}</DropdownItem>)}
        </DropdownMenu>
      </ButtonDropdown>
    )
  };

  return (
    <div id="header">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" id="adyen-logo">
          <img width="150px" height="auto" src={AdyenLogo} alt="logo" />
        </NavbarBrand>
        {recentPsp}
      </Navbar>
    </div>
  )
};

export default Header;