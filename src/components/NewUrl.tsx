import React, { useRef } from "react";

type NewUrlProps = {
  onAddUrl: (urlInput: string) => void
}

const NewUrl: React.FC<NewUrlProps> = (props) => {
  const urlInputRef = useRef<HTMLInputElement>(null);
  const urlSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newUrlInput = urlInputRef.current!.value
    props.onAddUrl(newUrlInput);
  };

  return (
    <>
    <form onSubmit={urlSubmitHandler}>
      <label htmlFor="urlInput">Paste your URL here:</label>
      <input type="url" id="urlInput" ref={urlInputRef}/>
      <button type="submit">Add New URL</button>
    </form>
    </>
  );
};

export default NewUrl;
