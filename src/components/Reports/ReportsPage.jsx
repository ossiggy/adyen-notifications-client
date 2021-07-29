import { Container, Jumbotron, Button, Spinner } from 'reactstrap';
import ReportList from './ReportList';
import useGetReports from '../../hooks/useGetReports';

const ReportsPage = ({ path, token, setMerchant }) => {
  const [reportList, loading] = useGetReports(path, token);

  if(loading) {
    return <Spinner color="success" />
  };

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">ReportList</h1>
        <div className="button-container">
          <Button onClick={() => setMerchant(null)}>Back</Button>
        </div>
      </Jumbotron>
      {reportList && <ReportList reportList={reportList} path={path} token={token} /> }
    </Container>
  )
};

export default ReportsPage;