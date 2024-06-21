
import { Routes, Route } from "react-router-dom";

import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Home from "./Home.jsx";
import Yellow from "./Yellow.jsx";
import Black from "./Black.jsx";

export default function MainContainer() {
  return (
    <div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue/>} ></Route>
          <Route path="/red" element={<Red/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/yellow" element={<Yellow/>} ></Route>
          <Route path="/black" element={<Black/>} ></Route>
        </Routes>
      </div>
    </div>
  );
}
