import { useState } from "react";
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import ImageUpload from "./components/ImageUpload.";
import Game from "./components/Game";
// import Button from "./components/Button";

function App() {
  return (
    <>
      <Heading />
      {/* <Button /> */}
      <ImageUpload />
      <Game />
    </>
  );
}
export default App;