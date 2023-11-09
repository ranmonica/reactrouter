import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import './index.css'

function App() {
  

  return (
    <>
      Show Code
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
        <Link to="/Home">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path ="/Blue" element={<Blue />} />
          <Route path ="/Red" element={<Red />} />
          <Route path="/Home" element={<Home />} />

        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
