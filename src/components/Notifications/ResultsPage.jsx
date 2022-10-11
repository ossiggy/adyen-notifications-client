import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import useGetNotifications from "../../hooks/useGetNotifications";
import Notification from "./Notification";

import "../../styles/Results/ResultsPage.css";

const ResultsPage = () => {
  const { pspReference } = useParams();
  const [data] = useGetNotifications(pspReference);
  console.log(data);
  let display =
    data && data.length
      ? data.map((item, i) => {
          const key = `${item._id}`;
          return (
            <Row className="noti-row" key={key}>
              <Notification item={item} />
            </Row>
          );
        })
      : "";

  if (data && !data.length) {
    display = (
      <Row className="noti-row">
        <h2 id="no-results">No Results</h2>
      </Row>
    );
  }

  return (
    <Container>
      <hr />
      {display}
    </Container>
  );
};

export default ResultsPage;
