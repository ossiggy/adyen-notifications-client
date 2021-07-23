import React, { useState } from 'react';
import Merchants from './Merchants';
import ReportList from './ReportList';

const ReportsPage = ({ user }) => {
  // TODO: Pagination
  // const [page, setPage] = useState(null);
  const [params, setParams] = useState({
    userId: user.userId,
    merchant: '',
    reportId: '',
    token: user.authToken
  });

  const updateParams = (name, value) => {
    setParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const { userId, merchant, reportId, token } = params;
  const path = [userId, merchant, reportId].filter(Boolean).join("/");

  let display = <Merchants path={path} token={token} updateParams={updateParams} />; 
 
  if (user && merchant) {
    display = <ReportList path={path} token={token} updateParams={updateParams}/>
  }

  return(
    <div id="reports-page">
      {display}
    </div>
  );
};

export default ReportsPage;