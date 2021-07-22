import React from 'react';
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap';
import useGetReports from '../../hooks/useGetReports';
import { API_BASE_URL } from "../../config";


const Reports = ({ path, token }) => {
  const [reportList] = useGetReports(path, token);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const downloadReport = async id => {
    try {
      const file = await fetch(`${API_BASE_URL}/reports/${path}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const blob = await file.blob();
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = `${id}.zip`;
      a.click();
    } catch (err) {
      console.error("Error downloading reports");
    }
  };

  if (reportList) {
    console.log(reportList)
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">Reports</h1>
          <p className="lead">Click to download</p>
        </Jumbotron>
        <Col>
        {reportList.map(report => (
          <Row key={report.id} className="report-row">
            <Button color="primary" onClick={() => downloadReport(report.id)}>
              {months[parseInt(report.month) - 1]} {report.year} - {report.type}  
            </Button>
          </Row>
          )
        )}
        </Col>
      </Container>
    )
  }
  return <div></div>
};

export default Reports;