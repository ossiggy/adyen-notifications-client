import React from "react";
import { Container, Row } from "reactstrap";
import useGetNotifications from "../../../hooks/useGetNotifications";
import Notification from "./Notification";

import "../../../styles/Results/ResultsPage.css"

const ResultsPage = props => {
  const [data] = useGetNotifications(props.pspReference);

  let display = data ? data.map((item, i) => {
    const key = `${item.pspReference.split('.')[0]}-${i}`;
    return (
      <Row className="noti-row" key={key}>
        <Notification item={item}/>
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