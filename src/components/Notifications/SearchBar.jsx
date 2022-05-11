import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  InputGroupButtonDropdown,
} from "reactstrap";

import "../../styles/SearchBar.css";

const SearchBar = ({ recent, updateRecent }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (pathname && pathname.length) {
      const pspReference = pathname.replace(/[^A-Za-z0-9]/g, "");
      setInput(pspReference);
    }
  }, [pathname]);

  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = (e, item = input) => {
    e.preventDefault();
    updateRecent(item);
    navigate(item);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  let recents;

  if (recent && recent.length) {
    recents = (
      <InputGroupButtonDropdown
        addonType="prepend"
        isOpen={isOpen}
        toggle={toggle}
      >
        <DropdownToggle color="success" outline caret>
          Recent
        </DropdownToggle>
        <DropdownMenu>
          {recent.map((item) => (
            <DropdownItem key={item} onClick={(e) => handleSubmit(e, item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </InputGroupButtonDropdown>
    );
  }

  return (
    <Container id="search-container">
      <Form>
        <InputGroup>
          {recents}
          <Input
            value={input}
            onChange={(e) => handleChange(e)}
            placeholder="search by pspReference"
          />
          <InputGroupAddon addonType="append">
            <Button
              type="submit"
              color="success"
              onClick={(e) => handleSubmit(e)}
            >
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default SearchBar;
