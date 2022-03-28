import React from "react";
import { Bookmark } from "../models/bookmark.model";

export type MyBookmarksContextObj = {
  myBookmarks: Bookmark[];
  isLoading: boolean;
  error: any;
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: string) => void;
  addTags: (id: string, enteredTags: string[]) => void;
  removeTag: (id: string, tag: string) => void;
  filterByTag: (tag: string) => Bookmark[];
};

const MyBookmarksContext = React.createContext<MyBookmarksContextObj>({
  myBookmarks: [],
  isLoading: false,
  error: null,
  addBookmark: () => {},
  removeBookmark: () => {},
  addTags: () => {},
  removeTag: () => {},
  filterByTag: () => [],
});

export default MyBookmarksContext;
