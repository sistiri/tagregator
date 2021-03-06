import React, { Fragment, useContext, useState } from "react";
import Card from "../UI/Card";

import classes from "./BookmarkItem.module.css";
import Button from "../UI/Button";
import NewTags from "./NewTags";
import Tags from "./Tags";
import HyperLink from "./HyperLink";
import MyBookmarksContext from "../../context/myBookmarks-context";

type BookMarkItemProps = {
  key: string;
  id: string;
  url: string;
  onRemoveBookmark: () => void;
  onAddTags: (id: string, enteredTags: string[]) => void;
  tags?: string[];
};
const BookmarkItem: React.FC<BookMarkItemProps> = (props) => {
  console.log(">>>>> BookarkItem rendered");
  const { removeTag } = useContext(MyBookmarksContext)

  const [isNewTagsModalShown, setIsNewTagsModalShown] = useState(false);

  const showEditTagsModal = () => {
    setIsNewTagsModalShown(true);
  };

  const hideEditTagsModalHandler = () => {
    setIsNewTagsModalShown(false);
  };

  const onRemoveTag = (tag: string) => {
    removeTag(props.id, tag);
  };

  return (
    <>
      <Card className={classes.card}>
        <Fragment>
          <li key={props.id} id={props.id}>
            <HyperLink url={props.url} />
            <Button
              className={`${classes.button} ${classes.editBtn}`}
              type="button"
              onClick={showEditTagsModal}
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
          <Tags
            tags={props.tags}
            onShowAddTags={showEditTagsModal}
            onRemoveTag={onRemoveTag}
          />
          {isNewTagsModalShown && (
            <NewTags
              id={props.id}
              url={props.url}
              tags={props.tags}
              onAddTags={props.onAddTags}
              onRemoveTag={onRemoveTag}
              onCancel={hideEditTagsModalHandler}
            ></NewTags>
          )}
        </Fragment>
      </Card>
    </>
  );
};

export default BookmarkItem;
