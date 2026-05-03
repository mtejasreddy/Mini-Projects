import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div>
      <h1>Image Gallery App</h1>
      <SearchBar setImages={setImages} />
      <Gallery images={images} />
    </div>
  );
}

export default App;
