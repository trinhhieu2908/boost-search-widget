import React from "react";
import { checkUndefined } from "../../utils/functions/checkUndefined";

const WidgetSuggestion = ({ data, searchString }) => {
  const listSuggestions = data.map((item) => {
    const term = item.term.toLowerCase();
    const search = checkUndefined(searchString);
    const index = term.indexOf(search.toLowerCase());
    const endBoldIndex = index + search.length;
    if (search === "" || search.length === 1) {
      return (
        <li key={item.term} className="list-item">
          <a href={item.URL}>{item.term}</a>
        </li>
      );
    }
    return (
      <li key={item.term} className="list-item">
        <a href={item.URL}>
          {item.term.slice(0, index)}
          <b>{item.term.slice(index, endBoldIndex)}</b>
          {item.term.slice(endBoldIndex)}
        </a>
      </li>
    );
  });

  return (
    <div className="search-group-item">
      <h3>{searchString ? 'Suggestions' : 'Popular Search'}</h3>
      <ul className="group-list">{listSuggestions}</ul>
    </div>
  );
};

export default WidgetSuggestion;
