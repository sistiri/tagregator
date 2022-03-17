import { Bookmark } from "../models/bookmark.model";


const DUMMY_BOOKMARKS =
  "";

export async function fetchAllBookmarks() {
  const response = await fetch(DUMMY_BOOKMARKS);
  if(!response.ok) {
      throw new Error('Request failed!')
  }
  console.log(response);
  const data = await response.json();
  console.log(data);
//   const loadedBookmarks: Bookmark[] = [];

  data.map((bm:Bookmark) => console.log(bm))
  
  
}
