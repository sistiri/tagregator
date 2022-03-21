import React, { Fragment, useRef } from "react";
import { Tag } from "../../models/tag.model";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import classes from "./NewTags.module.css";

type NewTagsProps = {
  id: string;
  url: string;
  onEditTags: (id: string, enteredTags: string[]) => void;
};

const NewTags: React.FC<NewTagsProps> = (props) => {
  const newTagInputRef = useRef<HTMLInputElement>(null);
  const newTagsInputHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTags = (newTagInputRef.current!.value.split(','))
    console.log(enteredTags);
    props.onEditTags(props.id, enteredTags);
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
        </form>
        <div></div>
      </Fragment>
    </Modal>
  );
};

export default NewTags;
