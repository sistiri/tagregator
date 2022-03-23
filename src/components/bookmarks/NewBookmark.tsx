import React, { Fragment } from "react";
import useHttp from "../../hooks/use-http";

import Card from "../UI/Card";
import { Bookmark } from "../../models/bookmark.model";
import BookmarkForm from "./BookmarkForm";

import classes from "./NewBookmark.module.css";

type NewBookmarkProps = {
  myBookmarks : Bookmark[] ;
  onAddBookmark: (createdBookmark: Bookmark) => void;
};

const NewBookmark: React.FC<NewBookmarkProps> = (props) => {
  console.log('>>>>> NewBookmark rendered')

  const { isLoading, error, sendRequest: postBookmarkRequest } = useHttp();

  const createBookmark = (
    newBookmarkBase: { url: string; date: Date },
    responseData: { name: string }
  ) => {
    const createdBookmark: Bookmark = {
      ...newBookmarkBase,
      ...{ id: responseData.name },
    };
    console.log(createdBookmark);
    props.onAddBookmark(createdBookmark);
  };

  const enterUrlHandler = async (enteredUrl: string) => {

    if(props.myBookmarks.some(bm => bm.url === enteredUrl)){
      console.log('You have already saved this URL!')
      return;
    }

    const newBookmarkBase = {
      url: enteredUrl,
      date: new Date(),
    };

    postBookmarkRequest(
      {
        url: "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newBookmarkBase,
      },
      createBookmark.bind(null, newBookmarkBase)
    );

  };

  return (
    <Card className={classes.card}>
      <Fragment>
        <BookmarkForm onEnterUrl={enterUrlHandler} loading={isLoading} />
        {error && <p>{error}</p>}
      </Fragment>
    </Card>
  );
};

export default NewBookmark;
