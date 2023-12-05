// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/Home";
import { AboutScreen } from "./screens/About";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route index element={<HomeScreen color="purple" />} />
          <Route path="/about" element={<AboutScreen color="green" />} />
          <Route path="/home" element={<HomeScreen color="purple" />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
