import { useState } from "react";
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import ImageUpload from "./components/ImageUpload.";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Heading />
      <ImageUpload />
      <Game/>
    </>
  );
}
export default App;
