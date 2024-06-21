import "./App.css";

import Navbar from "./components/Navbar.jsx";
import MainContainer from "./components/MainContainer.jsx";
import Home from "./components/Home.jsx";
import FooterBar from "./components/FooterBar.jsx";


function App() {
  return (
    <>
      <Navbar />
      <MainContainer />
      <Home/>
      <FooterBar />
    </>
  );
}

export default App;
