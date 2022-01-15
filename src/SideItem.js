import React, { useState } from "react";

const SideItem = (props) => {
  console.log("called");
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div class="sideItem">
      {" "}
      {props.content}
      <button 
      onClick = {() => {setIsFavorite(!isFavorite);}}
      class="sideButton">
          {isFavorite.toString()}
      </button>
    </div>
  );
};

export default SideItem;
