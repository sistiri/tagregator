import React from "react";
import Layout from "./components/layout/Layout";
import MyBookmarks from "./components/pages/MyBookmarks";
import "./App.css";

const App: React.FC = () => {
  return (
    <Layout>
      <div className="App">
        <MyBookmarks />
      </div>
    </Layout>
  );
};

export default App;
