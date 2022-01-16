import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SideItem from "./SideItem.js";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div class="sidebar">
      <Link to="/"><div class="menuLabel"> Menu </div> </Link>
      {Object.keys(props.pages).map(item => (<SideItem content={item}/>))}
    </div>
  );
};

export default Menu;
