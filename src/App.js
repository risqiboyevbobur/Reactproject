import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./components/style.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section" element={<Section />} />
          <Route path="/*" element={<h1> 404 Not faund please check your internet or word</h1>} />
        </Routes>
      <Header/>
      <Footer/>
      </Router>
    </div>
  );  
}
export default App;
