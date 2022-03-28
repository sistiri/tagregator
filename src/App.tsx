import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyBookmarks from "./pages/MyBookmarks";
import MyTags from "./pages/MyTags";
import "./App.css";
import TagDetails from "./pages/TagDetails";
import MyBookmarksProvider from "./context/MyBookmarksProvider";

const App: React.FC = () => {
  return (
    <MyBookmarksProvider>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="mybookmarks" element={<MyBookmarks />} />
            <Route path="/mytags" element={<MyTags />} />
            <Route path="/mytags/:tag" element={<TagDetails />} />
          </Routes>
        </div>
      </Layout>
    </MyBookmarksProvider>
  );
};

export default App;
