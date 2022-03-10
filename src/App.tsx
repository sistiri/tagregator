import React, { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import NewUrl from "./components/NewUrl";
import { Bookmark } from "./models/bookmark.model";

import "./App.css";
import BookmarkList from "./components/BookmarkList";

const App: React.FC = () => {
  const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const localBookmarks = localStorage.getItem("myBookmarks");
    if (localBookmarks !== null) {
      setMyBookmarks(JSON.parse(localBookmarks));
    }
  }, []);

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
    const filteredBookmarks = myBookmarks.filter((bm) => bm.id !== id);
    setMyBookmarks(filteredBookmarks);
    localStorage.setItem("myBookmarks", JSON.stringify(filteredBookmarks));
  };

  return (
    <Layout>
      <div className="App">
        <NewUrl onAddUrl={addNewUrlHandler} />
        <BookmarkList
          bookmarks={myBookmarks}
          onRemoveBookmark={removeBookmarkHandler}
        ></BookmarkList>
      </div>
    </Layout>
  );
};

export default App;
