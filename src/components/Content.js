import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home.js";

const Content = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
        {Object.keys(props.pages).map(
          key => (<Route path={toPath(key)} element={props.pages[key]} />))}
    </Routes>
  );
};

const toPath = (page) => {
  return "/" + page.toLowerCase();
}
export default Content;
