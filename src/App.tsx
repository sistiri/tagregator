import React, { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import NewUrl from "./components/bookmarks/NewUrl";
import { Bookmark } from "./models/bookmark.model";

import "./App.css";
import BookmarkList from "./components/bookmarks/BookmarkList";

const App: React.FC = () => {
  const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);

  // useEffect(() => {
  //   const localBookmarks = localStorage.getItem("myBookmarks");
  //   if (localBookmarks !== null) {
  //     setMyBookmarks(JSON.parse(localBookmarks));
  //   }
  // }, []);

  useEffect(() => {
    fetch(
      "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        const loadedBookmarks = [];
        for (const key in responseData) {
          loadedBookmarks.push({
            id: key,
            url: responseData[key].url,
            date: responseData[key].date,
            tags: responseData[key].tags,
            snapshot: responseData[key].snapshot,
            comments: responseData[key].comments,
          });
        }
        if (loadedBookmarks !== null) {
          setMyBookmarks(loadedBookmarks);
        }
      });
  }, []);

  const addNewUrlHandler = (url: string) => {
    if (myBookmarks.some((bm) => bm.url === url) || url.length < 1) {
      return;
    }

const newBookmarkBase = {
  url: url,
  date: new Date()
}
    fetch(
      "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json",
      {
        method: "POST",
        body: JSON.stringify(newBookmarkBase),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const newBookmark = new Bookmark(url)
        setMyBookmarks((prevBookmarks) => [
          ...prevBookmarks,
          {...newBookmark, ...{id: responseData.name} },
        ]);
      });
    // localStorage.setItem(
    //   "myBookmarks",
    //   JSON.stringify([...myBookmarks, newBookmark])
    // );
  };

  const removeBookmarkHandler = (id: string) => {
    const filteredBookmarks = myBookmarks.filter((bm) => bm.id !== id);
    setMyBookmarks(filteredBookmarks);
    localStorage.setItem("myBookmarks", JSON.stringify(filteredBookmarks));
  };

  const editTagsHandler = (id: string, enteredTags: string[]) => {
    const newTags = [...enteredTags];
    console.log(newTags);
  };

  return (
    <Layout>
      <div className="App">
        <NewUrl onAddUrl={addNewUrlHandler} />
        <BookmarkList
          bookmarks={myBookmarks}
          onRemoveBookmark={removeBookmarkHandler}
          onEditTags={editTagsHandler}
        ></BookmarkList>
      </div>
    </Layout>
  );
};

export default App;
