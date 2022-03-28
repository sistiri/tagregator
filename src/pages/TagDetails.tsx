import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import Bookmarks from "../components/bookmarks/Bookmarks";
import { MyBookmarksContext } from "../context/my-bookmarks-context";
import { Bookmark } from "../models/bookmark.model";

type TagDetailsProps = {};

const TagDetails: React.FC<TagDetailsProps> = (props) => {
  const params = useParams();
  const myBookmarksCtx = useContext(MyBookmarksContext);

  const taggedBookmarks: Bookmark[] = myBookmarksCtx.filterByTag(params.tag!)
  

  return (
    <Fragment>
      <h1>{params.tag}</h1>
      <Bookmarks
        bookmarks={taggedBookmarks}
        loading={myBookmarksCtx.isLoading}
        error={myBookmarksCtx.error}
        // onFetch={myBookmarksCtx.fetchBookmarks}
        onRemoveBookmark={myBookmarksCtx.removeBookmark}
        onAddTags={myBookmarksCtx.addTags}
      />
    </Fragment>
  );
};

export default TagDetails;
