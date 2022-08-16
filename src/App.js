import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ourproducts from "./pages/Ourproducts";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import TopNav from "./components/TopNav/TopNav";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Workprocess from "./pages/Workprocess";
import Ourwork from "./pages/Ourwork";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<TopNav />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="design" element={<Design />} />
          <Route path="development" element={<Development />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="ourproducts" element={<Ourproducts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="workprocess" element={<Workprocess />} />
          <Route path="ourwork" element={<Ourwork />} />
          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
