import React, { useState } from "react";
import { Bookmark } from "../models/bookmark.model";

type BookmarksContextObj = {
  bookmarks: Bookmark[];
  addBookmark: (url: string) => void;
  removeBookmark: (id: string) => void;
};

export const BookmarksContext = React.createContext<BookmarksContextObj>({
  bookmarks: [],
  addBookmark: () => {},
  removeBookmark: () => {},
});

const BookmarksContextProvider: React.FC = (props) => {
  const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);

  const addBookmarkHandler = (url: string) => {
    const newBookmark = new Bookmark(url);
    setMyBookmarks((prevBookmarks) => prevBookmarks.concat(newBookmark));
  };

  const removeBookmarkHandler = (id: string) => {
    setMyBookmarks(prevBookmarks => prevBookmarks.filter(bm => bm.id !== id))
  }

  const contextValue: BookmarksContextObj = {
    bookmarks: myBookmarks,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler
  }

  return <BookmarksContext.Provider value={contextValue}>
    {props.children}
  </BookmarksContext.Provider>
};

export default BookmarksContextProvider;
