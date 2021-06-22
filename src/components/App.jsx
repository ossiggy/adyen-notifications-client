import React from "react";
import "../styles/App.css";
import { Container } from "reactstrap";
import Header from "./Header";
import SearchPage from "./SearchPage";
import "../styles/App.css"

const App = () => {
  return (
    <div id="app">
      <Header />
      <Container id="app-container">
        <SearchPage />
      </Container>
    </div>
  );
}

export default App;