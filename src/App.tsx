import React, { useState } from "react";

import NewUrl from "./components/NewUrl";
import { Bookmark } from "./models/bookmark.model";

import "./App.css";

const App: React.FC = () => {
  const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);

  const addNewUrlHandler = (url: string) => {
    if (myBookmarks.some((bm) => bm.url === url)) {
      return;
    }
    const newBookmark = new Bookmark(url);
    setMyBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
  };

  return (
    <div className="App">
      <NewUrl onAddUrl={addNewUrlHandler}></NewUrl>
      <ul>
        {myBookmarks.map((bm) => (
          <li key={bm.id}>{bm.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
