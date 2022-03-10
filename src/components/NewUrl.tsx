import React, { useRef } from "react";
import Card from "./UI/Card";
import classes from "./NewUrl.module.css";
import Button from "./UI/Button";

type NewUrlProps = {
  onAddUrl: (urlInput: string) => void;
};

const NewUrl: React.FC<NewUrlProps> = (props) => {
  const urlInputRef = useRef<HTMLInputElement>(null);
  const urlSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newUrlInput = urlInputRef.current!.value;
    props.onAddUrl(newUrlInput);
  };

  return (
    <Card className={classes.card}>
      <div>
        <form onSubmit={urlSubmitHandler}>
          <label className={classes.label} htmlFor="urlInput">
            <span>Paste your URL here:</span> 
          </label>
          <input
            className={classes.form__field}
            type="url"
            id="urlInput"
            placeholder="https://tagregator.io"
            ref={urlInputRef}
          />
          <Button className={classes.button} type="submit">
            Add New URL
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default NewUrl;
