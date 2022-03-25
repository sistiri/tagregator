import React, { useEffect, useState } from "react";

import NewBookmark from "../components/bookmarks/NewBookmark";
import Bookmarks from "../components/bookmarks/Bookmarks";
import { Bookmark } from "../models/bookmark.model";
import useHttp from "../hooks/use-http";
import useFetchBookmarks from "../hooks/use-fetch-bookmarks";
// import classes from "./MyBookmarks.module.css";

const MyBookmarks: React.FC = () => {
  const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);

  const { isLoading, error, sendRequest: fetchBookmarks } = useHttp();

  useFetchBookmarks()

  useEffect(() => {
    
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

    fetchBookmarks(
      {
        url: "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json",
      },
      transformBookmarks
    );
  }, [fetchBookmarks]);

  const addBookmarkHandler = (bookmark: Bookmark) => {
    if (myBookmarks.some((bm) => bm.url === bookmark.url)) {
      console.log("URL already exists!");
      return;
    }
    setMyBookmarks((prevBookmarks) => prevBookmarks.concat(bookmark));
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
  };

  const addTagsHandler = (id: string, enteredTags: string[]) => {
    const bookmarkIndexToEdit = myBookmarks.findIndex((bm) => bm.id === id);
    const newMyBookmarks = [...myBookmarks];
    let allTags: string[];
    if (!myBookmarks[bookmarkIndexToEdit].tags) {
      allTags = enteredTags;
    } else {
      allTags = [...newMyBookmarks[bookmarkIndexToEdit].tags!, ...enteredTags];
    }
    newMyBookmarks[bookmarkIndexToEdit].tags = allTags;

    console.log(newMyBookmarks[bookmarkIndexToEdit].tags);
    setMyBookmarks((prevBookMarks) => (prevBookMarks = newMyBookmarks));
    fetch(
      `https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ tags: allTags }),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(newMyBookmarks);
  };

  return (
    <div className="MyBookmarks">
      <NewBookmark
        onAddBookmark={addBookmarkHandler}
        myBookmarks={myBookmarks}
      />
      <Bookmarks
        bookmarks={myBookmarks}
        loading={isLoading}
        error={error}
        onFetch={fetchBookmarks}
        onRemoveBookmark={removeBookmarkHandler}
        onAddTags={addTagsHandler}
      />
    </div>
  );
};

export default MyBookmarks;
