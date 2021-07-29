import { Col, Row, Button } from "reactstrap";

const MerchantList = ({ merchantList, setMerchant }) => {
  return(
    <Col>
      {merchantList.map(({name}) => (
          <Row key={name}>
            <Button color="success" onClick={() => setMerchant(name)}>
              {name}
            </Button>
          </Row>
        )
      )}
    </Col>
  );
};

export default MerchantList;