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
    <div>
      {props.tags ? (
        props.tags.map((t: string) => (
          <span key={t} className={classes.tag}>
            {t}
          </span>
        ))
      ) : ( <h5>No tags added yet...</h5>
        // <Button
        //   className={classes.button}
        //   type="button"
        //   onClick={props.onShowAddTags}
        // >
        //   Add some tags!
        // </Button>
      )}
    </div>
  );
};

export default Tags;
