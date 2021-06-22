import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import "../../styles/Results/Notification.css"

const Notification = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const details = isOpen ? (
    <Container className="json">
      <pre className="json-code">
        <code>
          {JSON.stringify(JSON.parse(item.body), null, 2)}
        </code>
      </pre>
    </Container>
  )
    : "";

  return (
    <div className="notiContainer">
      <Button className="notiButton" color="primary" onClick={() => handleClick()}>{item.pspReference}: {item.eventCode}</Button>
      {details}
    </div>
  )
};

export default Notification;