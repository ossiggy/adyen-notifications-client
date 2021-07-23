import React from 'react';
import { Container, Jumbotron, Col, Button } from 'reactstrap';
import Report from './Report';
import useGetReports from '../../hooks/useGetReports';

const ReportList = ({ path, token, updateParams }) => {
  const [reportList] = useGetReports(path, token);

  if (reportList) {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">ReportList</h1>
          <div className="button-container">
            <Button onClick={() => updateParams('merchant', '')}>Back</Button>
          </div>
        </Jumbotron>
        <Col>
        {reportList.map(report => (
            <Report key={report.id} path={`${path}/${report.id}`} token={token}/>
          )
        )}
        </Col>
      </Container>
    )
  }
  return <div></div>
};

export default ReportList;