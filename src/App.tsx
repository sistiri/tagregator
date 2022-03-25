import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyBookmarks from "./pages/MyBookmarks";
import MyTags from "./pages/MyTags";
import "./App.css";
import TagDetails from "./pages/TagDetails";

const App: React.FC = () => {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="mybookmarks" element={<MyBookmarks />} />
          <Route path="/mytags" element={<MyTags />} />
          <Route path="/mytags/:tag" element={<TagDetails/>} />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
