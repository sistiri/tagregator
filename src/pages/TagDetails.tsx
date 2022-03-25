import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

type TagDetailsProps = {};

const TagDetails: React.FC<TagDetailsProps> = (props) => {
  const params = useParams();

  console.log(params.tag);

  return (
    <Fragment>
      <h1>{params.tag}</h1>
      {/* <Bookmarks
        bookmarks={taggedBookmarks}
        loading={isLoading}
        error={error}
        onFetch={fetchBookmarks}
        onRemoveBookmark={removeBookmarkHandler}
        onAddTags={addTagsHandler}
      /> */}
      {/* <Bookmarks bookmarks={[]} loading={false} error={undefined} onFetch={function (requestConfig: RequestConfig, applyData: Function): Promise<void> {
              throw new Error("Function not implemented.");
          } } onRemoveBookmark={function (id: string): void {
              throw new Error("Function not implemented.");
          } } onAddTags={function (id: string, enteredTags: string[]): void {
              throw new Error("Function not implemented.");
          } } /> */}
    </Fragment>
  );
};

export default TagDetails;
