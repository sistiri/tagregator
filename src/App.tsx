import React, { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import NewUrl from "./components/bookmarks/NewUrl";
import { Bookmark } from "./models/bookmark.model";

import "./App.css";
import BookmarkList from "./components/bookmarks/BookmarkList";
import Modal from "./components/UI/Modal";
import NewTags from "./components/bookmarks/NewTags";
import { Tag } from "./models/tag.model";

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

  const addNewTagsHandler = (tags: Tag[]) => {
    const newTags = [...tags]
    console.log(newTags)
  }

  return (
    <Layout>
      <div className="App">
        <Modal>
          <NewTags onAddTags={addNewTagsHandler}></NewTags>
        </Modal>
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
