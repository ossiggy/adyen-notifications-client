import React, { useState } from "react";
import { Container, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import ResultsPage from "./Results/ResultsPage";

const SearchPage = () => {
  const [input, setInput] = useState("")
  const [pspReference, setPspReference] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <Container>
      <InputGroup>
        <Input onChange={e => handleChange(e)} placeholder="search by pspReference" />
        <InputGroupAddon addonType="append">
          <Button color="success" onClick={() => setPspReference(input)}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <ResultsPage pspReference={pspReference} />
    </Container>
  )
};

export default SearchPage;