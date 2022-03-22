import React, { Fragment, useRef } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import classes from "./NewTags.module.css";

type NewTagsProps = {
  id: string;
  url: string;
  onAddTags: (id: string, enteredTags: string[]) => void;
  onCancel: () => void
};

const NewTags: React.FC<NewTagsProps> = (props) => {
  const newTagInputRef = useRef<HTMLInputElement>(null);

  const newTagsInputHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTags = (newTagInputRef.current!.value.split(',').map(t => t.trim()))
    console.log(enteredTags);
    props.onAddTags(props.id, enteredTags);
    props.onCancel()
  };


  return (
    <Modal>
      <Fragment>
        <p>Link: {props.url}</p>
        <form className="classes.form__field" onSubmit={newTagsInputHandler} >
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
          <Button className={classes.button} onClick={props.onCancel}type="button">
            Cancel
          </Button>
        </form>
        <div></div>
      </Fragment>
    </Modal>
  );
};

export default NewTags;
