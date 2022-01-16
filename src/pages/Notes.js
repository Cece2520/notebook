import "./Notes.css";
import React, { Component } from "react";
import autosize from "autosize";
import FancyTextarea from "../components/FancyTextarea.js";

class Notes extends Component {
  render() {
    return (
      <div>
        <form class="entryForm">
          <label class="newNote" id="notesEntry">
            <FancyTextarea/>
            <span class="placeholder">New note: </span>
          </label>
          <button class="saveNote">Save</button>
        </form>
      </div>
    );
  }
}

export default Notes;
