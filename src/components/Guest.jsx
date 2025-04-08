import React from "react";
import { Collapse } from "antd";
import Forms from "../data/Forms.json";

function Guest({ handleSelect, selectedUrl }) {
  const items = Object.entries(Forms).map(([category, links], index) => ({
    key: String(index + 1),
    label: category,
    children: (
      <ul className="link-list">
        {Object.entries(links).map(([name, url]) => (
          <li key={name}>
            <div
              className="link-icon"
              onClick={() => handleSelect(url)}
            >
              {name}
            </div>
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <div className="guest-page">
      {console.log(items)}
      {/* Collapse Panels */}
      <div className="guest-collapse-container">
        <Collapse items={items} />
      </div>

      {/* iFrame for selected form */}
      {selectedUrl && (
        <div className="guest-iframe-container">
          <iframe src={selectedUrl} title="content-frame"></iframe>
        </div>
      )}
    </div>
  );
}

export default Guest;
