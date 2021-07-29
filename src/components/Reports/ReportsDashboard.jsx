import { useState } from 'react';
import { Spinner } from 'reactstrap';
import ReportsPage from './ReportsPage';
import MerchantsPage from './MerchantsPage';
import useGetReports from '../../hooks/useGetReports';

const ReportsDashboard = ({ user: { userId, authToken } }) => {
  const [merchantList, loading] = useGetReports(userId, authToken)
  // TODO: Pagination
  // const [page, setPage] = useState(null);
  const [merchant, setMerchant] = useState(null);

  if (loading) {
    return <Spinner color="success" />
  };

  const path = [userId, merchant].filter(Boolean).join("/");

  return(
    <div id="reports-page">
      { userId && merchant && <ReportsPage path={path} token={authToken} setMerchant={setMerchant} /> }
      { !merchant && merchantList && <MerchantsPage merchantList={merchantList} setMerchant={setMerchant} /> }
    </div>
  );
};

export default ReportsDashboard;