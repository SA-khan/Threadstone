import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./core/header";
import Navbar from "./components/Navbar";
import Contact from './components/contact'
import About from './components/about'
import sidebar from "./shared/sidebar";
import article from "./components/article";
import Project from "./components/project"
import Courousal from "./components/courausal";
import Footer from "./shared/footer";
import Index from './components/Index'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

const App = () => {
  return <React.Fragment>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  </React.Fragment>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
