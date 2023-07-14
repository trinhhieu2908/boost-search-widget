import React, { useState } from "react";

import SearchInput from "../components/SearchInput/SearchInput";
import SearchWidget from "../components/SearchWidget/components/SearchWidget";
import { mainWidget } from "../constants/element-id";
import { positionStyle } from "../components/SearchWidget/utils/constants/widgetPosition";

const WidgetPage = () => {
  const [mainSearchValue, setMainSearchValue] = useState("");

  const onSearch = (event) => {
    setMainSearchValue(event.target.value);
  };

  return (
    <div className="app-content">
      <div className="search-main-content">
        <SearchInput
          className="search-main"
          id={mainWidget.inputId}
          placeholder="Type here to search"
          onChange={onSearch}
        />
        <SearchWidget
          inputId={mainWidget.inputId}
          widgetId={mainWidget.widgetId}
          position={positionStyle.Left}
          searchString={mainSearchValue}
        />
      </div>
    </div>
  );
};

export default WidgetPage;
