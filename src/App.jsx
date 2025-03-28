import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  const [selectedUrl, setSelectedUrl] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);


  function toggleDropdown(title) {
    setOpenDropdown((prev) => (prev === title ? null : title));
  }
  

  function handleSelect(url) {
    setSelectedUrl(url);
    console.log("Selected URL: ", url);
    setOpenDropdown(null); // Close dropdown after selection
  }

  function handleHomeClick() {
    setSelectedUrl("");
    setOpenDropdown(false);
    window.scrollTo(0, 0);
  }


  return (
    <div className="App">
      <Navbar 
        onHomeClick={handleHomeClick} 
      />
      <Home 
          openDropdown={openDropdown}
          setOpenDropdown ={setOpenDropdown}
          toggleDropdown={toggleDropdown}
          handleSelect={handleSelect}
          selectedUrl={selectedUrl}
        />

    </div>
  );
}

export default App;