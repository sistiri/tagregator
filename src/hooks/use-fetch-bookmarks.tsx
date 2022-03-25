import React, { useEffect } from 'react'
import { Bookmark } from '../models/bookmark.model';
import useHttp from './use-http';

const useFetchBookmarks = () => {

    const { isLoading, error, sendRequest: fetchBookmarks } = useHttp();

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
    //   // if (loadedBookmarks !== null) {
    //   setMyBookmarks(loadedBookmarks);
    //   // }
    };

    fetchBookmarks(
      {
        url: "https://tagregatory-default-rtdb.europe-west1.firebasedatabase.app/bookmarks.json",
      },
      transformBookmarks
    );
    
  }, [fetchBookmarks]);

  return { isLoading, error }
}

export default useFetchBookmarks