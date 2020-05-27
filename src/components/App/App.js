import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
