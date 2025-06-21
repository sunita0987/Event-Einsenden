import { useState } from "react";
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import ImageUpload from "./components/ImageUpload.";
import Game from "./components/Game";
// import AlbumImage from "./components/AlbumImage";
// import Button from "./components/Button";
import { Routes, Route } from 'react-router-dom';
import SongsPage from './Pages/SongPage';



function App() {
  return (
    <>
      <Heading />
      {/* <Button /> */}
      <ImageUpload />
      <Game />
    {/* <AlbumImage/> */}
     <Routes>
      <Route path="/:genre/:letter" element={<SongsPage />} />
      <Route path="/" element={<SongsPage />} />
    </Routes>

    </>
  );
}
export default App;