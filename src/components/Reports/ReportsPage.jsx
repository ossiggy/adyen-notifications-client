import React, { useState } from 'react';
import Merchants from './Merchants';
import Reports from './Reports';

const ReportsPage = ({ user }) => {
  console.log('render')
  const [page, setPage] = useState(null);
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
  console.log(path);

  let display = <Merchants path={path} token={token} updateParams={updateParams} />; 
 
  if (user && merchant) {
    display = <Reports path={path} token={token} updateParams={updateParams}/>
  }

  return(
    <div id="reports-page">
      {display}
    </div>
  );
};

export default ReportsPage;