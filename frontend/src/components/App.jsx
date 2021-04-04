import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
