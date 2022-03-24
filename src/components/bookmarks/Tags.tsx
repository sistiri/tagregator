// import Button from "../UI/Button";
import { Link } from "react-router-dom";
import classes from "./Tags.module.css";

type TagsProps = {
  loading?: boolean;
  error?: any;
  onShowAddTags?: () => void;
  tags?: string[];
  filteredBy?: string;
  filterPhrase?: string;
};

const Tags: React.FC<TagsProps> = (props) => {
  console.log('>>>>> Tags rendered')
  return (
    <div>
      {props.tags ? (
        props.tags.map((tag: string) => (
          <Link to={`../mytags/${tag}`} key={tag} className={classes.tag}>
            {tag}
          </Link>
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
