import React, { Fragment, useRef } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import classes from "./NewTags.module.css";
import Tags from "./Tags";

type NewTagsProps = {
  id: string;
  url: string;
  onAddTags: (id: string, enteredTags: string[]) => void;
  onCancel: () => void;
  tags?: string[];
};

const NewTags: React.FC<NewTagsProps> = (props) => {
  const newTagInputRef = useRef<HTMLInputElement>(null);

  const newTagsInputHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let enteredTags: string[];
    if (
      newTagInputRef.current!.value !== null &&
      newTagInputRef.current!.value.length > 0
    ) {
      enteredTags = newTagInputRef
        .current!.value.split(",")
        .map((t) => t.trim());
    } else {
      console.log('No valid tag has been added!')
      props.onCancel();
      return;
    }

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
        <form className="classes.form__field" onSubmit={newTagsInputHandler}>
          <label className={classes.label} htmlFor="newTagInput">
            Type your tags here:
          </label>
          <input
            className={classes.form__field}
            type="text"
            id="newTagInput"
            ref={newTagInputRef}
          />
          <Button className={classes.button} type="submit">
            Add New Tags
          </Button>
          <Tags tags={props.tags} onShowAddTags={()=> {}} />
          <Button
            className={classes.button}
            onClick={props.onCancel}
            type="button"
          >
            Done
          </Button>
        </form>
        <div></div>
      </Fragment>
    </Modal>
  );
};

export default NewTags;
