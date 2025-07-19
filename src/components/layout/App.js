import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../views/Header.js";
import Home from "../views/Home.js";
import Camera from "../views/Camera.js";
import Customize from "../views/Customize.js";
import FAQ from "../views/FAQ.js";
import Contact from "../views/Contact.js";
// Reactive-responsive

function App() {
  return (
    <>
      <Header /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </>
  );
}

export default App;
