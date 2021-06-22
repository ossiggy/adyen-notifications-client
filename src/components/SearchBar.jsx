import React from "react";
import { Container, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

import "../styles/SearchBar.css"

const SearchBar = ({ input, setInput, setRecent }) => {

  const handleChange = e => {
    setInput('input', e.target.value);
  };

  const handleClick = () => {
    setRecent(input);
  };

  return (
    <Container id="search-container">
      <InputGroup>
        <Input value={input} onChange={e => handleChange(e)} placeholder="search by pspReference" />
        <InputGroupAddon addonType="append">
          <Button color="success" outline onClick={() => handleClick()}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Container>
  )
};

export default SearchBar;