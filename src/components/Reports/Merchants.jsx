import React from 'react';
import { Container, Col, Row, Button, Jumbotron } from 'reactstrap';
import useGetReports from '../../hooks/useGetReports';

const Merchants = ({ path, token, updateParams }) => {
  const [merchantList] = useGetReports(path, token);

  if (merchantList){
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">Merchant Accounts</h1>
          <p className="lead">Select an account to view saved reports</p>
        </Jumbotron>
        <Col>
          {merchantList.map(({ name }) => {
            return (
              <Row key={name}>
                <Button color="success" onClick={() => updateParams('merchant', name)}>
                  {name}
                </Button>
              </Row>
            )
          })}
        </Col>
      </Container>
    );
  }

  return (<div></div>)
};

export default Merchants;