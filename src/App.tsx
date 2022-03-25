import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyBookmarks from "./pages/MyBookmarks";
import MyTags from "./pages/MyTags";
import "./App.css";
import TagDetails from "./pages/TagDetails";
import BookmarksContextProvider from "./context/my-bookmarks-context";

const App: React.FC = () => {
  return (
    <BookmarksContextProvider>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="mybookmarks" element={<MyBookmarks />} />
            <Route path="/mytags" element={<MyTags />} />
            <Route path="/mytags/:tag" element={<TagDetails />} />
          </Routes>
        </div>
      </Layout>
    </BookmarksContextProvider>
  );
};

export default App;
