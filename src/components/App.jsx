import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { 
  Container,
} from "reactstrap";
import Header from "./Header";
import ReportsDashboard from "./Reports/ReportsDashboard";
import NotificationsPage from "./Notifications/NotificationsPage";
import "../styles/App.css"

const App = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo && userInfo.userId && userInfo.authToken) {
      setUser(userInfo)
    } 
  }, []);

  const toggle = () => setModal(!modal);

  const logout = () => {
    localStorage.clear('user');
    setUser(null);
  };

  let display = <NotificationsPage toggle={toggle} modal={modal} setUser={setUser} />

  if (user) {
    display = <ReportsDashboard user={user} />;
  };

  return (
    <div id="app">
      <Header toggle={toggle} user={user} logout={logout}/>
      <Container id="app-container">
        {display}
      </Container>
    </div>
  );
}

export default App;