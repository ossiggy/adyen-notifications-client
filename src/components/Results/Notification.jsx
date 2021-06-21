import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import "../../styles/Results/Notification.css"

const Notification = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const details =  isOpen ? (
    <Container className="json">
      <pre>
        <code>
          {JSON.stringify(JSON.parse(props.body), null, 2)}
        </code>
      </pre>
    </Container>
  )
  : "";

  return (
    <div className="notiContainer">
      <Button className="notiButton" color="primary" onClick={() => handleClick()}>{props.pspReference}: {props.eventCode}</Button>
      {details}
    </div>
  )
};

export default Notification;