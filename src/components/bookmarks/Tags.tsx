import { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Tags.module.css";

type TagsProps = {
  onShowAddTags: () => void;
  tags?: string[];
  filteredBy?: string;
  filterPhrase?: string;
};

const Tags: React.FC<TagsProps> = (props) => {
  console.log('>>>>> Tags rendered')
  return (
    <Fragment>
      {props.tags ? (
        props.tags.map((t: string) => (
          <span key={t} className={classes.tag}>
            {t}
          </span>
        ))
      ) : (
        <Button
          className={classes.button}
          type="button"
          onClick={props.onShowAddTags}
        >
          Add some tags!
        </Button>
      )}
    </Fragment>
  );
};

export default Tags;
