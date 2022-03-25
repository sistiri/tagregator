// import Button from "../UI/Button";
import { Link } from "react-router-dom";
import TagItem from "./TagItem";

type TagsProps = {
  loading?: boolean;
  error?: any;
  onShowAddTags?: () => void;
  onRemoveTag: (tag: string) => void;
  tags?: string[];
  // filteredBy?: string;
  // filterPhrase?: string;
};

const Tags: React.FC<TagsProps> = (props) => {
  console.log(">>>>> Tags rendered");

  return (
    <div>
      {props.tags ? (
        props.tags.map((tag: string) => (
          <Link to={`../mytags/${tag}`} key={tag}>
            <TagItem tag={tag} removeTag={props.onRemoveTag}></TagItem>
          </Link>
        ))
      ) : (
        <h5>No tags added yet...</h5>
      )}
    </div>
  );
};

export default Tags;
