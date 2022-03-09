import React from "react";
import Card from "./UI/Card";

import classes from './BookmarkItem.module.css'

type BookMarkItemProps = {
  key: string;
  id: string;
  url: string;
  onRemoveBookmark: () => void;
};
const BookmarkItem: React.FC<BookMarkItemProps> = (props) => {
  return (
    <>
      <Card className={classes.card}>
        <li key={props.id} id={props.id}>
          <span>{props.url}</span>
          <button className= {classes.btn} type="button" onClick={props.onRemoveBookmark}>
            Delete
          </button>
        </li>
      </Card>
    </>
  );
};

export default BookmarkItem;
