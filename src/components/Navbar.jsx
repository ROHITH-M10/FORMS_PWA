import React from "react";

function Navbar({ 
  onHomeClick
}) {


  return (
    <div className="go-to-home-nav-bar">
      <button onClick={onHomeClick} className="home-button">
        <i className="fa fa-home"></i>
      </button>

    </div>
  );
}

export default Navbar;
