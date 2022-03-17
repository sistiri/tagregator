import React, { Fragment, useRef } from "react";
import { Tag } from "../../models/tag.model";
import Button from "../UI/Button";

import classes from "./NewTags.module.css";

type NewTagsProps = {
  onAddTags: (newTag: Tag[]) => void;
};

const NewTags: React.FC<NewTagsProps> = (props) => {
  const newTagInputRef = useRef<HTMLInputElement>(null);
  const newTagsInputHandler = () => {
    const enteredTags = newTagInputRef.current!.value;
    console.log(enteredTags);
  };

  return (
    <Fragment>
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
  );
};

export default NewTags;
