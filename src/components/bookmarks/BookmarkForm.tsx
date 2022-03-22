import React, { useRef } from "react";
import Button from "../UI/Button";

import classes from './BookmarkForm.module.css'

type BookmarkFormProps = {
    enteredUrlHandler: (enteredUrl: string) => void
};

const BookmarkForm = (props: BookmarkFormProps) => {
  const urlInputRef = useRef<HTMLInputElement>(null);

  const urlSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredUrl = urlInputRef.current!.value;
    if (enteredUrl.trim().length > 0) {
      props.enteredUrlHandler(enteredUrl);
    }
  };

  return (
    <form onSubmit={urlSubmitHandler}>
      <label className={classes.label} htmlFor="urlInput">
        <span>Paste your URL here:</span>
      </label>
      <input
        className={classes.form__field}
        type="url"
        id="urlInput"
        placeholder="https://"
        ref={urlInputRef}
      />
      <Button className={classes.button} type="submit">
        Add New URL
      </Button>
    </form>
  );
};

export default BookmarkForm;
