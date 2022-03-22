import React from "react";
import { Bookmark } from "../../models/bookmark.model";
import Button from "../UI/Button";
import BookmarkItem from "./BookmarkItem";

type BookmarksProps = {
  bookmarks: Bookmark[];
  loading: boolean;
  error: any;
  onFetch: () => {};
  onRemoveBookmark: (id: string) => void;
  onAddTags: (id: string, enteredTags: string[]) => void;
};

const Bookmarks = (props: BookmarksProps) => {
  let bookmarkList = <h2> No Bookmarks found. Start adding some!</h2>;

  if (props.bookmarks.length > 0) {
    bookmarkList = (
      <ul>
        {props.bookmarks.map((bm) => (
          <BookmarkItem
            key={bm.id}
            id={bm.id}
            url={bm.url}
            tags={bm.tags}
            onRemoveBookmark={() => props.onRemoveBookmark(bm.id)}
            onAddTags={props.onAddTags}
          ></BookmarkItem>
        ))}
      </ul>
    );
  }

  let content = bookmarkList;

  if (props.error) {
    content = (
      <Button className="button" type="button" onClick={props.onFetch}>
        Try again!
      </Button>
    );
  }
  if (props.loading) {
    content = <h2>Loading bookmarks...</h2>
  }


  return content
};

export default Bookmarks;
