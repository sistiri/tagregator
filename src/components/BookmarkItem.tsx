import React from "react";

type BookMarkItemProps = {
  key: string;
  id: string;
  url: string;
  onRemoveBookmark: () => void;
};
const BookmarkItem: React.FC<BookMarkItemProps> = (props) => {

  return (
    <>
      <li key={props.id} id={props.id}>
        <span>{props.url}</span>
        <button type="button" onClick={props.onRemoveBookmark}>
          Delete
        </button>
      </li>
    </>
  );
};

export default BookmarkItem;
