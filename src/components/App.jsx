import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";

import Header from "./Header";
import { SearchBar, ResultsPage } from "./Notifications";
import "../styles/App.css";

const App = () => {
  const [rawRecent, setRawRecent] = useState(
    localStorage.getItem("recentPsp") || "[]"
  );

  const recent = JSON.parse(rawRecent);

  const updateRecent = (pspReference) => {
    if (!pspReference) {
      return;
    }

    const newRecent = JSON.stringify(
      [...new Set([pspReference, ...recent])].slice(0, 15)
    );
    localStorage.setItem("recentPsp", newRecent);

    setRawRecent(newRecent);
  };

  return (
    <div id="app">
      <Header />
      <Router>
        <SearchBar recent={recent} updateRecent={updateRecent} />
        <Routes>
          <Route path="/:pspReference" element={<ResultsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
