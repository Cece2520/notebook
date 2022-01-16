import "./App.css";

import Nav from "./components/Nav.js";
import Heading from "./components/Heading.js";
import Menu from "./components/Menu.js";
import Content from "./components/Content.js";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/*Pages*/
import Secret from "./pages/Secret.js";
import Notes from "./pages/Notes.js";

let pages = {
  "Secret": <Secret/>,
  "Notes": <Notes/>};

export default function App() {
  return (
    <Router>
      <div class="App">
        <Nav />
        <Heading />
        <div class="mainContainer">
          <Menu pages={pages} on="Home"/>
          <div class="content">
            <Content pages={pages}/>
          </div>
        </div>
      </div>
    </Router>
  );
}
