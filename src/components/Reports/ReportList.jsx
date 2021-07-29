import { Col } from 'reactstrap';
import Report from './Report';

const ReportList = ({ reportList, path, token }) => {
  return (
    <Col>
      {reportList.map(report => (
          <Report key={report.id} path={`${path}/${report.id}`} token={token}/>
        )
      )}
    </Col>
  )
};

export default ReportList;