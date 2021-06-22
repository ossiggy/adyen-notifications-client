import React, { useState } from "react";
import "../styles/App.css";
import { Container } from "reactstrap";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultsPage from "./Results/ResultsPage";
import "../styles/App.css"

const App = () => {
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
    <div id="app">
      <Header />
      <Container id="app-container">
        <SearchBar input={input} setInput={updateState} recent={recent} setRecent={updateRecent} />
        <ResultsPage pspReference={query} />
      </Container>
    </div>
  );
}

export default App;