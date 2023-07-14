import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchWidget from "../../auto-suggestions-search-widget/SearchWidget/SearchWidget";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="header">
      <div className="header-content">
        <img
          src="https://boostcommerce.net/cdn/shop/files/boost-logo_013edbfe-e373-4a0e-9c0d-d1fe834e43b9_110x.png?v=1661919459"
          alt="Logo"
        />
        <SearchInput
          className="search-header"
          id="app-search-input"
          onChange={onSearch}
          placeholder="Search on header"
        />
        <SearchWidget
          inputId="app-search-input"
          widgetId="app-search-widget"
          searchString={searchValue}
        />
      </div>
    </div>
  );
};

export default Header;
