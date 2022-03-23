import React, { useRef } from "react";
import Button from '../UI/Button'

import classes from "./NewTagsForm.module.css";

type NewTagsFormProps = {
onEnterTags: (enteredTags: string[]) => void
}

const NewTagsForm: React.FC<NewTagsFormProps> = (props) => {
    const newTagInputRef = useRef<HTMLInputElement>(null);


    const tagsSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let enteredTags: string[];
        if (
          newTagInputRef.current!.value !== null &&
          newTagInputRef.current!.value.length > 0
        ) {
          enteredTags = newTagInputRef
            .current!.value.split(",")
            .map((t) => t.trim());
            props.onEnterTags(enteredTags)
        } else {
          console.log('No valid tag has been added!')
          return;
        }
    }

  return (
    <form className="classes.form__field" onSubmit={tagsSubmitHandler}>
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
  )
}

export default NewTagsForm
