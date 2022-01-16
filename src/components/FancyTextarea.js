import "../pages/Notes.css";
import React, { Component } from "react";
import TextareaAutosize from 'react-textarea-autosize';

class FancyTextarea extends Component {
  render() {
    return (
      <TextareaAutosize
        name="entry"
        class="textEntry"
      />
    );
  }
}

export default FancyTextarea;
