import React from "react";
import { Container, Row } from "reactstrap";
import useGetNotifications from "../../hooks/useGetNotifications";
import Notification from "./Notification";

import "../../styles/Results/ResultsPage.css"

const ResultsPage = props => {
  const [data] = useGetNotifications(props.pspReference);

  let display = data ? data.map(item => {
    return (
      <Row className="noti-row" key={item.pspReference}>
        <Notification item={item}></Notification>
      </Row>
    )
  })
    :
    "";

  if (data && !data.length) {
    display = (
      <Row className="noti-row">
        <h2 id="no-results">No Results</h2>
      </Row>
    )
  }

  return (
    <Container>
      <hr />
      {display}
    </Container>
  )
};

export default ResultsPage;