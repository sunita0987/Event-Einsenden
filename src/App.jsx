import { useState } from "react";
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Game from "./components/Game";
import { Routes, Route } from 'react-router-dom';
import SongsPage from './Pages/SongPage';



function App() {
  return (
    <>
      <Heading />
      <Game />
     <Routes>
      <Route path="/:genre/:letter" element={<SongsPage />} />
      <Route path="/" element={<SongsPage />} />
    </Routes>
    
    </>
  );
}
export default App;