import React from "react";
import { Space } from "antd";
import "./App.css";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import PageContent from "./components/PageContent/PageContent";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header className="header" />
      <Space className="sidemenu_pagecontent">
        <SideMenu className="sideMenu" />
        <PageContent className="page_content" />
      </Space>
      <Footer className="footer" />
    </div>
  );
};

export default App;
