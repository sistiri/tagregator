import React, { useEffect, useState } from 'react'
import useHttp from '../hooks/use-http';
import { Bookmark } from '../models/bookmark.model';
import MyBookmarksContext, { MyBookmarksContextObj } from './myBookmarks-context'

type MyBookmarksProviderProps = {}


    const MyBookmarksProvider: React.FC<MyBookmarksProviderProps> = (props) => {
        const [myBookmarks, setMyBookmarks] = useState<Bookmark[]>([]);
      
        const { isLoading, error, sendRequest: fetchBookmarksHandler } = useHttp();
      
        useEffect(() => {
          const transformBookmarks = (bookmarksObj: { [id: string]: Bookmark }) => {
            const loadedBookmarks = [];
            for (const key in bookmarksObj) {
              loadedBookmarks.push({
                id: key,
                url: bookmarksObj[key].url,
                date: bookmarksObj[key].date,
                tags: bookmarksObj[key].tags,
                snapshot: bookmarksObj[key].snapshot,
                comments: bookmarksObj[key].comments,
              });
            }
            // if (loadedBookmarks !== null) {
            setMyBookmarks(loadedBookmarks);
            // }
          };
      
          fetchBookmarksHandler(
            {
              url: "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json",
            },
            transformBookmarks
          );
        }, [fetchBookmarksHandler]);
      
        const addBookmarkHandler = (bookmark: Bookmark) => {
          if (myBookmarks.some((bm) => bm.url === bookmark.url)) {
            console.log("URL already exists!");
            return;
          }
          setMyBookmarks((prevBookmarks) => prevBookmarks.concat(bookmark));
        };
      
        const removeBookmarkHandler = (id: string) => {
          setMyBookmarks((prevBookmarks) =>
            prevBookmarks.filter((bm) => bm.id !== id)
          );
          fetch(
            `https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks/${id}.json`,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }
          );
        };
      
        const addTagsHandler = (id: string, enteredTags: string[]) => {
          const bookmarkIndexToEdit = myBookmarks.findIndex((bm) => bm.id === id);
          const newMyBookmarks = [...myBookmarks];
          let allTags: string[];
          if (!myBookmarks[bookmarkIndexToEdit].tags) {
            allTags = enteredTags;
          } else {
            allTags = [...newMyBookmarks[bookmarkIndexToEdit].tags!, ...enteredTags];
          }
          newMyBookmarks[bookmarkIndexToEdit].tags = allTags;
      
          console.log(newMyBookmarks[bookmarkIndexToEdit].tags);
          setMyBookmarks((prevBookMarks) => (prevBookMarks = newMyBookmarks));
          fetch(
            `https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks/${id}.json`,
            {
              method: "PATCH",
              body: JSON.stringify({ tags: allTags }),
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log(newMyBookmarks);
        };
      
        const removeTagHandler = (id: string, tag: string) => {
          const bookmarkIndexToEdit = myBookmarks.findIndex((bm) => bm.id === id);
          const newMyBookmarks = [...myBookmarks];
          let allTags: string[];
          if (myBookmarks[bookmarkIndexToEdit].tags) {
            allTags = myBookmarks[bookmarkIndexToEdit].tags!.filter((t) => t !== tag);
          } else {
            throw Error("This tag has not been found on this Bookmark!");
          }
          newMyBookmarks[bookmarkIndexToEdit].tags = allTags;
      
          setMyBookmarks((prevBookMarks) => (prevBookMarks = newMyBookmarks));
          fetch(
            `https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks/${id}.json`,
            {
              method: "PATCH",
              body: JSON.stringify({ tags: allTags }),
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log(newMyBookmarks);
        };
      
        const filterByTag = (tag: string) => {
          const allTags = [];
          for (const key in myBookmarks) {
            allTags.push(...(myBookmarks[key].tags ?? []));
          }
          const uniqueTags = Array.from(new Set(allTags));
          console.log(allTags);
          console.log(uniqueTags);
          const bookmarksWithTags: Bookmark[] = myBookmarks.filter((bm) => bm.tags);
          console.log(bookmarksWithTags);
          let taggedBookmarks: Bookmark[] = [];
          if (uniqueTags.includes(tag)) {
            taggedBookmarks = bookmarksWithTags.filter((bm) =>
              bm.tags!.includes(tag)
            );
          } else {
            console.log("No bookmarks are saved to this tag!");
          }
          return taggedBookmarks;
        };
      
        const contextValue: MyBookmarksContextObj = {
          myBookmarks: myBookmarks,
          isLoading: isLoading,
          error: error,
          addBookmark: addBookmarkHandler,
          removeBookmark: removeBookmarkHandler,
          addTags: addTagsHandler,
          removeTag: removeTagHandler,
          filterByTag: filterByTag,
        };
      
        return (
          <MyBookmarksContext.Provider value={contextValue}>
            {props.children}
          </MyBookmarksContext.Provider>
        );
      };
 

export default MyBookmarksProvider