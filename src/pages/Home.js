import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  /*testing*/
  return (
    <div className="App">
      <div class="content">
        Content <br />
        <a href="https://www.google.com/"> link </a> <br/>
        <Link to="/secret">shhh...</Link>
      </div>
    </div>
  );
};

export default Home;
