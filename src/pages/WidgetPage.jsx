import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { settingsSelectors } from "../redux/settings/selector";
import SearchInput from "../components/SearchInput/SearchInput";
import SearchWidget from "../components/SearchWidget/components/SearchWidget";
import SearchWidgetSetting from "../components/SearchWidgetSetting/SearchWidgetSetting";

const WidgetPage = () => {
  const [mainSearchValue, setMainSearchValue] = useState("");
  const numberOfCharacter = useSelector(settingsSelectors.getNumberOfCharacter);

  const onSearch = (event) => {
    setMainSearchValue(event.target.value);
  };

  useEffect(() => {
    if (mainSearchValue.length >= numberOfCharacter.value) {
      onFocusSearch();
    } else {
      onFocusOutSearch();
    }
  }, [mainSearchValue, numberOfCharacter]);

  const onFocusSearch = () => {
    const target = document.getElementById("large-search");
    const x = target.getBoundingClientRect().left;
    const y = target.getBoundingClientRect().top;
    const height = target.offsetHeight;

    const widget = document.getElementById("main-search-widget");
    widget.classList.add("active");
    widget.style.left = x + "px";
    widget.style.top = y + height + "px";
  };

  const onFocusOutSearch = () => {
    const widget = document.getElementById("main-search-widget");
    widget.classList.remove("active");
  };
  return (
    <div className="app-content">
      <SearchInput
        className="search-main"
        id="large-search"
        placeholder="Type here to search"
        onChange={onSearch}
      />
      <SearchWidget id="main-search-widget" searchString={mainSearchValue} />
      <SearchWidgetSetting />
    </div>
  );
};

export default WidgetPage;
