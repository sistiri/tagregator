import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyBookmarks from "./components/pages/MyBookmarks";
import MyTags from "./components/pages/MyTags";
import "./App.css";

const App: React.FC = () => {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="mybookmarks" element={<MyBookmarks />} />
          <Route path="/mytags" element={<MyTags />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
