import React, { useContext } from "react";

import NewBookmark from "../components/bookmarks/NewBookmark";
import Bookmarks from "../components/bookmarks/Bookmarks";
import MyBookmarksContext from "../context/myBookmarks-context";


const MyBookmarks: React.FC = () => {
  const myBookmarksCtx = useContext(MyBookmarksContext)
  
  return (
    <div className="MyBookmarks">
      <NewBookmark
        onAddBookmark={myBookmarksCtx.addBookmark}
        myBookmarks={myBookmarksCtx.myBookmarks}
      />
      <Bookmarks
        bookmarks={myBookmarksCtx.myBookmarks}
        loading={myBookmarksCtx.isLoading}
        error={myBookmarksCtx.error}
        onRemoveBookmark={myBookmarksCtx.removeBookmark}
        onAddTags={myBookmarksCtx.addTags}
        // onFetch={myBookmarksCtx.fetchBookmarks}
      />
    </div>
  );
};

export default MyBookmarks;
