import React, { Fragment } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import classes from "./NewTags.module.css";
import NewTagsForm from "./NewTagsForm";
import Tags from "./Tags";

type NewTagsProps = {
  id: string;
  url: string;
  onAddTags: (id: string, enteredTags: string[]) => void;
  onCancel: () => void;
  tags?: string[];
};

const NewTags: React.FC<NewTagsProps> = (props) => {
  const enterTagsHandler = (enteredTags: string[]) => {
    let uniqueTags: string[];

    const filterTags = (enteredTags: string[], oldTags: string[]) => {
      const filtered = enteredTags.filter((t) => {
        return oldTags.indexOf(t) === -1;
      });
      return filtered;
    };

    if (props.tags) {
      uniqueTags = filterTags(enteredTags, props.tags);
    } else {
      uniqueTags = Array.from(new Set([...enteredTags]));
    }

    console.log(enteredTags, props.tags, uniqueTags);
    uniqueTags.length > 0
      ? props.onAddTags(props.id, uniqueTags)
      : console.log("No unique tags added!");
    props.onCancel();
  };

  return (
    <Modal>
      <Fragment>
        <p>Link: {props.url}</p>
        <NewTagsForm onEnterTags={enterTagsHandler} />

        <Tags tags={props.tags} onShowAddTags={() => {}} />
        <Button
          className={classes.button}
          onClick={props.onCancel}
          type="button"
        >
          Done
        </Button>

        <div></div>
      </Fragment>
    </Modal>
  );
};

export default NewTags;
