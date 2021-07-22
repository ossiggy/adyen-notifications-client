import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import LoginModal from "./LoginModal";
import ResultsPage from "./Results/ResultsPage";

const NotificationsPage = ({ toggle, modal, setUser }) => {
  const [notification, setNotification] = useState({
    query: '',
    input: '',
    rawRecent: localStorage.getItem("recentPsp") || "[]"
  });

  const { query, input, rawRecent } = notification;
  const recent = JSON.parse(rawRecent);

  const updateState = (name, value) => {
    setNotification(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateRecent = pspReference => {
    if (!pspReference) {
      return
    }

    const newRecent = JSON.stringify([...new Set([pspReference, ...recent])].slice(0, 15));
    localStorage.setItem("recentPsp", newRecent);

    setNotification(prevState => ({
      ...prevState,
      query: pspReference,
      input: pspReference,
      rawRecent: newRecent
    }));
  }

  return (
    <div id="notifications-page">
      <LoginModal toggle={toggle} modal={modal} setUser={setUser}/>
      <SearchBar input={input} setInput={updateState} recent={recent} setRecent={updateRecent} />
      <ResultsPage pspReference={query} />
    </div>
  );

};

export default NotificationsPage;