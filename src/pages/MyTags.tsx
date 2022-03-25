import React, { Fragment, useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import { Bookmark } from "../models/bookmark.model";
import Tags from "../components/bookmarks/Tags";

type MyTagsProps = {
  tags?: string[];
};

const MyTags: React.FC<MyTagsProps> = (props) => {
  const [myTags, setMyTags] = useState<string[]>([]);
  const { isLoading, error, sendRequest: fetchMyTags } = useHttp();

  useEffect(() => {
    const grabMyTags = (bookmarksObj: { [id: string]: Bookmark }) => {
      let loadedTags: string[] = [];
      for (const key in bookmarksObj) {
        if (bookmarksObj[key].tags) {
          loadedTags.push(...bookmarksObj[key].tags!);
        }
      }
      const uniqueTags: string[] = Array.from(new Set(loadedTags));
      setMyTags(uniqueTags);
      console.log(uniqueTags);
    };

    fetchMyTags(
      {
        url: "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json",
      },
      grabMyTags
    );
  }, [fetchMyTags]);

  return (
    <Fragment>
      <Tags tags={myTags} loading={isLoading} error={error}></Tags>
    </Fragment>
  );
};

export default MyTags;
