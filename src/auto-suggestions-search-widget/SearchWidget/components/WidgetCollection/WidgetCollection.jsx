import React from "react";

const WidgetCollection = ({ data }) => {
  return (
    <div className="search-group-item">
      <h3>Collection</h3>
      <ul className="group-list">
        {data.map((item) => (
          <li key={item.id} className="list-item">
            <a href={item.URL}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetCollection;
