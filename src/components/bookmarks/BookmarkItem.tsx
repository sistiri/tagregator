import React, { Fragment, useState } from "react";
import Card from "../UI/Card";

import classes from "./BookmarkItem.module.css";
import Button from "../UI/Button";
import NewTags from "./NewTags";

type BookMarkItemProps = {
  key: string;
  id: string;
  url: string;
  tags: string[];
  onRemoveBookmark: () => void;
  onEditTags: (id: string, enteredTags: string[]) => void;
};
const BookmarkItem: React.FC<BookMarkItemProps> = (props) => {
  const [isNewTagsModalShown, setIsNewTagsModalShown] = useState(false);

  const openEditTagsModal = () => {
    setIsNewTagsModalShown(true);
  };

  return (
    <>
      <Card className={classes.card}>
        <Fragment>
          <li key={props.id} id={props.id}>
            <span>{props.url}</span>
            <Button
              className={classes.button}
              type="button"
              onClick={openEditTagsModal}
            >
              Edit Tags
            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={props.onRemoveBookmark}
            >
              Delete
            </Button>
          </li>
          <div>{props.tags}</div>
          {isNewTagsModalShown && (
            <NewTags
              id={props.id}
              url={props.url}
              onEditTags={props.onEditTags}
            ></NewTags>
          )}
        </Fragment>
      </Card>
    </>
  );
};

export default BookmarkItem;
