import React, { Fragment, useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { Bookmark } from "../../models/bookmark.model";
import Tags from "../bookmarks/Tags";
import MyBookmarksContext from "../../context/myBookmarks-context";

type MyTagsProps = {
  tags?: string[];
};

const MyTags: React.FC<MyTagsProps> = (props) => {
  const myBookmarksCtx = useContext(MyBookmarksContext);
  const [myTags, setMyTags] = useState<string[]>([]);
  const { isLoading, error } = useHttp();
  const myBookmarks = myBookmarksCtx.myBookmarks;

  useEffect(() => {
    const loadedTags = [];
    for (const key in myBookmarks) {
      if (myBookmarks[key].tags) {
        loadedTags.push(...myBookmarks[key].tags!);
      } else {
        console.log(myBookmarks[key].id, " - Has no tags!");
      }
    }
    const uniqueTags: string[] = Array.from(new Set(loadedTags));
    setMyTags(uniqueTags);
    console.log(uniqueTags);
  }, [myBookmarks]);

  const onRemoveTag = (tag: string) => {
    const taggedBookmarks: Bookmark[] = myBookmarksCtx.filterByTag(tag);
    taggedBookmarks.map((bm) => myBookmarksCtx.removeTag(bm.id, tag));
  };

  return (
    <Fragment>
      <Tags
        tags={myTags}
        onRemoveTag={onRemoveTag}
        loading={isLoading}
        error={error}
      ></Tags>
    </Fragment>
  );
};

export default MyTags;
