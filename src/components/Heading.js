import "./Heading.css";
import turtle from "../images/turtle.jpeg";

const Nav = () => {
  /*testing*/
  return (
    <div class="heading">
      <img class="icon" src={turtle} alt="Turtle" />
      <span> Notebook of Things </span>
    </div>
  );
};

export default Nav;
