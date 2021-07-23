import React, { useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import useGetReports from '../../hooks/useGetReports';
import { API_BASE_URL } from "../../config";


const Report = ({ path, token }) => {
  const [reportData] = useGetReports(path, token);
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleViewer = () => {
    setIsOpen(!isOpen)
  };

  let viewer;

  if (isOpen) {
    viewer = (
      <Container>
        <div className="button-container">
          <Button color="success" onClick={() => downloadReport(reportData._id)}>Download</Button>
        </div>
        <pre className="json-code">
          <code>
            {JSON.stringify(JSON.parse(reportData.body), null, 2)}
          </code>
        </pre>
      </Container>
    )
  };

  if (reportData) {
    console.log(reportData)
    return (
      <Row key={reportData._id} className="report-row">
        <Button color="primary" onClick={() => toggleViewer()}>
          {months[parseInt(reportData.month) - 1]} {reportData.year} - {reportData.type}
        </Button>
        {viewer}
      </Row>
    )
  }
  return (<div></div>);
};

export default Report;