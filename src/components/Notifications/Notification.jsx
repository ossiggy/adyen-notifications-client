import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import "../../styles/Results/Notification.css";

const Notification = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const details = isOpen ? (
    <Container className="json">
      <pre className="json-code">
        <code>{JSON.stringify(JSON.parse(item.body), null, 2)}</code>
      </pre>
    </Container>
  ) : (
    ""
  );

  const idToDisplay = item.pspReference ? item.pspReference : item.poiId;

  return (
    <div className="notiContainer">
      <Button
        className="notiButton"
        color="success"
        onClick={() => handleClick()}
      >
        {idToDisplay}: {item.eventCode}
      </Button>
      {details}
    </div>
  );
};

export default Notification;
