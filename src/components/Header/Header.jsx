import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchWidget from "../SearchWidget/components/SearchWidget";

const Header = () => {
  const [headerSearchValue, setHeaderSearchValue] = useState("");

  const onSearchHeader = (event) => {
    console.log(event.target.value);
    setHeaderSearchValue(event.target.value);
  };

  const onFocusSearch = () => {
    const target = document.getElementById("header-search");
    const x = target.getBoundingClientRect().left;
    const y = target.getBoundingClientRect().top;
    const height = target.offsetHeight;
    const width = target.offsetWidth;

    const widget = document.getElementById("header-search-widget");
    widget.classList.add("active");

    const widgetWidth = document.querySelector(
      ".search-widget-content"
    ).offsetWidth;

    widget.style.left = x - (widgetWidth - width) + "px";
    widget.style.top = y + height + "px";
  };

  const onFocusOutSearch = () => {
    const widget = document.getElementById("header-search-widget");
    widget.classList.remove("active");
  };

  return (
    <div className="header">
      <div className="header-content d-flex align-items-center justify-content-between">
        <img
          src="https://boostcommerce.net/cdn/shop/files/boost-logo_013edbfe-e373-4a0e-9c0d-d1fe834e43b9_110x.png?v=1661919459"
          alt="Logo"
        />
        <SearchInput
          className="search-header"
          id="header-search"
          onFocus={onFocusSearch}
          onBlur={onFocusOutSearch}
          onChange={onSearchHeader}
        />
      </div>
    </div>
  );
};

export default Header;
