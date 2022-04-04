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
// import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MyBookmarksProvider>
        <Layout>
          <div className="App">
            <Routes>
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              /> */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mybookmarks" element={<MyBookmarks />} />
                <Route path="/mytags" element={<MyTags />} />
                <Route path="//mytags/:tag" element={<TagDetails />} />
              </Route>
              {/* <Route
                path="/mybookmarks"
                element={
                  <ProtectedRoute>
                    <MyBookmarks />
                  </ProtectedRoute>
                }
              /> */}

              {/* <Route
                path="/mytags"
                element={
                  <ProtectedRoute>
                    <MyTags />
                  </ProtectedRoute>
                }
              /> */}
              {/* <Route
                path="/mytags/:tag"
                element={
                  <ProtectedRoute>
                    <TagDetails />
                  </ProtectedRoute>
                }
              /> */}
            </Routes>
          </div>
        </Layout>
      </MyBookmarksProvider>
    </AuthProvider>
  );
};

export default App;
