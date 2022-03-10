import React, { useEffect, useState } from "react";

import NewUrl from "./components/NewUrl";
import BookmarkItem from "./components/BookmarkItem";
import { Bookmark } from "./models/bookmark.model";

import "./App.css";

const App: React.FC = () => {
  const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const localBookmarks = localStorage.getItem("myBookmarks");
    if( localBookmarks !== null ){
      setMyBookmarks( JSON.parse(localBookmarks) );
    }
  }, [])
  

  const addNewUrlHandler = (url: string) => {
    if (myBookmarks.some((bm) => bm.url === url)) {
      return;
    }
    const newBookmark = new Bookmark(url);
    setMyBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);

    localStorage.setItem(
      "myBookmarks",
      JSON.stringify([...myBookmarks, newBookmark])
    );
  };

  const removeBookmarkHandler = (id: string) => {
    const filteredBookmarks = myBookmarks.filter((bm) => bm.id !== id )
    setMyBookmarks(filteredBookmarks);
    localStorage.setItem('myBookmarks', JSON.stringify(filteredBookmarks))
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
