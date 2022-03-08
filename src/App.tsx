import React from "react";
import NewUrl from "./components/NewUrl";

import "./App.css";

function App() {
  const addNewUrlHandler = (newUrlInput: string) => {
    console.log(newUrlInput);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewUrl onAddUrl={addNewUrlHandler}></NewUrl>
      </header>
    </div>
  );
}

export default App;
