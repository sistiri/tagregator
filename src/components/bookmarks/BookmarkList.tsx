import React from "react";
import { Bookmark } from "../../models/bookmark.model";
import BookmarkItem from "./BookmarkItem";

type BookmarkListProps = {
    bookmarks: Bookmark[];
    onRemoveBookmark: (id: string) => void;
    onEditTags: (id: string, enteredTags: string[]) => void;
}

const BookmarkList = (props: BookmarkListProps) => {

    return (
        <ul>
          {props.bookmarks.map((bm) => (
            <BookmarkItem
              key={bm.id}
              id={bm.id}
              url={bm.url}
              tags={bm.tags}
              onRemoveBookmark={() => props.onRemoveBookmark(bm.id)}
              onEditTags={props.onEditTags}
            ></BookmarkItem>
          ))}
        </ul>
    )
};

export default BookmarkList;