// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/header";
import Home from "./pages/home";
import Contact from "./contact"
import Footer from './components/footer'
import Bussiness from "./components/bussiness_enc";
import { Services } from "./pages/services";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bussiness" element={<Bussiness />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
