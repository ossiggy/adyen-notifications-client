import React from "react";
import { Container, Row } from "reactstrap";
import useGetNotifications from "../../hooks/useGetNotifications";
import Notification from "./Notification";

const ResultsPage = props => {
  const [data] = useGetNotifications(props.pspReference);
  console.log(data);
  
  const display = data ? data.map(item => {
      return (
        <Row className="noti-row">
          <Notification {...item}></Notification>
        </Row>
      )
    })
    :
    "";

  return(
    <Container>
      {display}
    </Container>
  )
};

export default ResultsPage;