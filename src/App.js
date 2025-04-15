// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Experience from "./pages/Experience";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
    return (
        <>
            <Navbar />
            {/* Add a top margin to offset the fixed Navbar height */}
            <div style={{ marginTop: "64px" }}>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
