import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SideItem = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Link to={toPath(props.content)}>
    <div class="sideItem">
      {props.content}
      <button
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
        class="sideButton"
      >
        {isFavorite.toString()}
      </button>
    </div>
    </Link>
  );
};

const toPath = (page) => {
  return "/" + page.toLowerCase();
};

export default SideItem;
