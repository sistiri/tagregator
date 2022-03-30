import React from "react";
import { Route, Routes } from "react-router-dom";
import MyBookmarksProvider from "./context/MyBookmarksProvider";
import { AuthProvider } from "./context/auth-context";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/pages/Dashboard";
import MyBookmarks from "./components/pages/MyBookmarks";
import MyTags from "./components/pages/MyTags";
import TagDetails from "./components/pages/TagDetails";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import "./App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MyBookmarksProvider>
        <Layout>
          <div className="App">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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
