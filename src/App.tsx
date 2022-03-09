import React, { useState } from "react";

import NewUrl from "./components/NewUrl";
import BookmarkItem from "./components/BookmarkItem";
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

  const removeBookmarkHandler = (id: string) => {
    setMyBookmarks( prevBms => prevBms.filter(bm=> bm.id !== id))
  };

  return (
    <div className="App">
      <NewUrl onAddUrl={addNewUrlHandler}></NewUrl>
      <ul>
        {myBookmarks.map((bm) => (
          <BookmarkItem
            key={bm.id}
            id={bm.id}
            url={bm.url}
            onRemoveBookmark={() => removeBookmarkHandler(bm.id)}
          ></BookmarkItem>
        ))}
      </ul>
    </div>
  );
};

export default App;
