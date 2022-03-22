import { Fragment } from "react";
import classes from "./Tags.module.css";

type TagsProps = {
  tags: string[];
  filteredBy?: string;
  filterPhrase?: string;
};

const Tags: React.FC<TagsProps> = (props) => {
  return (
    <Fragment >
      {props.tags.map((t: string) => (
        <span key={t} className={classes.tag}>{t}</span>
      ))}
    </Fragment>
  );
};

export default Tags;
