import React from "react";
import Dropdown from "./Dropdown";
// Import combined forms data
import Forms from "../data/Forms.json";

function Guest({ 
  openDropdown, 
  toggleDropdown, 
  handleSelect, 
  selectedUrl 
}) {
  return (
    <div className="guest-page">
      {/* Dropdowns */}
      <div className="guest-dropdown-button-container">
        {Object.entries(Forms).map(([category, items]) => (
          <Dropdown
            key={category}
            title={category}
            items={items}
            isOpen={openDropdown === category}
            toggleDropdown={toggleDropdown}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* iFrame to display selected page */}
      {selectedUrl && (
        <div className="guest-iframe-container">
          <iframe src={selectedUrl} title="content-frame"></iframe>
        </div>
      )}
    </div>
  );
}

export default Guest;
