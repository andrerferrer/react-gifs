import React from 'react';
import SearchBar from "./search_bar"

const App = () => {
  return (
    <div className="app">
      <div className="left-scene">
        <SearchBar />
        <div className="gif"></div>
      </div>
      <div className="right-scene">
        <div className="giflist"></div>
      </div>
    </div>
  );
};

export default App;
