import "./App.css";
import SideItem from "./SideItem.js";
import turtle from "./images/turtle.jpeg";

function App() {
  return (
    <div className="App">
      <nav class="navContainer">
        <h1 class="navTitle">Notebook</h1>
      </nav>

      <div class="heading">
        <img class="icon" src={turtle} alt="Turtle"/>
        <span> Testing </span>
      </div>

      <div class="mainContainer">
        <div class="sidebar">
          <div class="menuLabel"> Menu </div>
          <SideItem content="Test1 but now it's a long one" />
          <SideItem content="Test2" />
        </div>
        <div class="content">
          Content <br />
          <a href="https://www.google.com/"> link </a>
        </div>
      </div>
    </div>
  );
}

export default App;
