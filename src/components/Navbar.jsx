
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Home from "./Home.jsx";
import Yellow from "./Yellow.jsx";
import Black from "./Black.jsx";

export default function Navbar() {
  return ( 
    <div id ="navbar">
    <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link>
      <Link to="/black">Black</Link>
    </div>
  );
}
