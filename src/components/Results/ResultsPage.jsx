import React from "react";
import { Container, Row } from "reactstrap";
import useGetNotifications from "../../hooks/useGetNotifications";
import Notification from "./Notification";

const ResultsPage = props => {
  const [data] = useGetNotifications(props.pspReference);
  console.log(data);
  return(
    <Container>
      {data.map(item => {
        return (
          <Row>
            <Notification {...item}></Notification>
          </Row>
        )
      })}
    </Container>
  )
};

export default ResultsPage;