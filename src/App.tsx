import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyBookmarks from "./pages/MyBookmarks";
import MyTags from "./pages/MyTags";
import "./App.css";
import TagDetails from "./pages/TagDetails";
import MyBookmarksProvider from "./context/MyBookmarksProvider";
import Login from "./pages/Login";
import { AuthProvider } from "./context/auth-context";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MyBookmarksProvider>
        <Layout>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/mybookmarks" element={<MyBookmarks />} />
              <Route path="/mytags" element={<MyTags />} />
              <Route path="/mytags/:tag" element={<TagDetails />} />
            </Routes>
          </div>
        </Layout>
      </MyBookmarksProvider>
    </AuthProvider>
  );
};

export default App;
