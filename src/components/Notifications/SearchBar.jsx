import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Container,
  InputGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  InputGroupAddon,
  InputGroupButtonDropdown
} from "reactstrap";

import "../../styles/SearchBar.css"

const SearchBar = ({ input, recent, setInput, setRecent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = e => {
    e.preventDefault();
    setRecent(input);
  };

  const handleClick = (item) => {
    setRecent(item)
  }

  const handleChange = e => {
    setInput('input', e.target.value);
  };

  let recents;

  if (recent && recent.length) {
    recents = (
      <InputGroupButtonDropdown addonType="prepend" isOpen={isOpen} toggle={toggle}>
        <DropdownToggle color="success" outline caret>Recent</DropdownToggle>
        <DropdownMenu>
          {recent.map(item => <DropdownItem key={item} onClick={() => handleClick(item)}>{item}</DropdownItem>)}
        </DropdownMenu>
      </InputGroupButtonDropdown >
    );
  };

  return (
    <Container id="search-container">
      <Form>
        <InputGroup>
          {recents}
          <Input value={input} onChange={e => handleChange(e)} placeholder="search by pspReference" />
          <InputGroupAddon addonType="append">
            <Button type="submit" color="success" onClick={e => handleSubmit(e)}>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </Container>
  )
};

export default SearchBar;