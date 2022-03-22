import React, { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import NewUrl from "./components/bookmarks/NewUrl";
import { Bookmark } from "./models/bookmark.model";
import useHttp from "./hooks/use-http";

import "./App.css";
import Bookmarks from "./components/bookmarks/Bookmarks";

const App: React.FC = () => {
  const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);

  const transformBookmarks = (bookmarksObj: { [id: string]: Bookmark }) => {
    const loadedBookmarks = [];
    for (const key in bookmarksObj) {
      loadedBookmarks.push({
        id: key,
        url: bookmarksObj[key].url,
        date: bookmarksObj[key].date,
        tags: bookmarksObj[key].tags,
        snapshot: bookmarksObj[key].snapshot,
        comments: bookmarksObj[key].comments,
      });
    }
    // if (loadedBookmarks !== null) {
      setMyBookmarks(loadedBookmarks);
    // }
  };

  const {
    isLoading,
    error,
    sendRequest: fetchBookmarks,
  } = useHttp(
    {
      url: "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json",
    },
    transformBookmarks
  );

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const addNewUrlHandler = (url: string) => {
    if (myBookmarks.some((bm) => bm.url === url) || url.length < 1) {
      return;
    }

    const newBookmarkBase = {
      url: url,
      date: new Date(),
    };
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
        const newBookmark = new Bookmark(url);
        setMyBookmarks((prevBookmarks) => [
          ...prevBookmarks,
          { ...newBookmark, ...{ id: responseData.name } },
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
    fetch(
      `https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks/${id}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    // localStorage.setItem("myBookmarks", JSON.stringify(filteredBookmarks));
  };

  const addTagsHandler = (id: string, enteredTags: string[]) => {
    const bookmarkIndexToEdit = myBookmarks.findIndex((bm) => bm.id === id);
    const newMyBookmarks = [...myBookmarks];
    const allTags = [
      ...newMyBookmarks[bookmarkIndexToEdit].tags,
      ...enteredTags,
    ];
    newMyBookmarks[bookmarkIndexToEdit].tags = allTags;
    console.log(newMyBookmarks[bookmarkIndexToEdit].tags);
    setMyBookmarks(newMyBookmarks);
    fetch(
      `https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ tags: allTags }),
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  return (
    <Layout>
      <div className="App">
        <NewUrl onAddUrl={addNewUrlHandler} />
        <Bookmarks
          bookmarks={myBookmarks}
          loading={isLoading}
          error={error}
          onFetch={fetchBookmarks}
          onRemoveBookmark={removeBookmarkHandler}
          onAddTags={addTagsHandler}
        />
      </div>
    </Layout>
  );
};

export default App;
