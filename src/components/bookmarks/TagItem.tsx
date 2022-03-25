import React, { useState } from "react";
import classes from "./TagItem.module.css";

type TagItemProps = {
  tag: string;
  removeTag: (tag: string) => void;
};

const TagItem: React.FC<TagItemProps> = (props) => {
  const [hover, setHover] = useState(false);
  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  const onCloseHandler = () => {
    props.removeTag(props.tag)
  }

  return (
    <span
      className={classes.tag}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {hover && (
        <span onClick={onCloseHandler} className={classes.close}>
          &times;
        </span>
      )}
      {props.tag}
    </span>
  );
};

export default TagItem;
