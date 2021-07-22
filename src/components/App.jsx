import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { 
  Container,
} from "reactstrap";
import Header from "./Header";
import ReportsPage from "./Reports/ReportsPage";
import NotificationsPage from "./Notifications/NotificationsPage";
import "../styles/App.css"

const App = () => {
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState(null);
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    console.log(userInfo)
    if (userInfo.userId && userInfo.authToken) {
      setUserId(userInfo.userId)
    } 
  }, []);

  console.log(userId)
  const toggle = () => setModal(!modal);

  let display = <NotificationsPage toggle={toggle} modal={modal} setUserId={setUserId} />

  if (userId) {
    display = <ReportsPage />
  }

  return (
    <div id="app">
      <Header toggle={toggle} userId={userId}/>
      <Container id="app-container">
        {display}
      </Container>
    </div>
  );
}

export default App;