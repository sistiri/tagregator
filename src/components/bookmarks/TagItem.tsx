import React, { useState } from "react";
import classes from "./TagItem.module.css";

type TagItemProps = {
  tag: string;
};

const TagItem: React.FC<TagItemProps> = (props) => {
  const [hover, setHover] = useState(false);

  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseLeaveHandler = () => {
    setHover(false);
  };
  return (
    <span
      className={classes.tag}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {hover && <span className={classes.close}>&times;</span>}
      {props.tag}
    </span>
  );
};

export default TagItem;
