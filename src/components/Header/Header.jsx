import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
  const [headerSearchValue, setHeaderSearchValue] = useState("");

  const onSearchHeader = (event) => {
    setHeaderSearchValue(event.target.value);
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
          id="header-search"
          onChange={onSearchHeader}
          placeholder="Search on header"
        />
      </div>
    </div>
  );
};

export default Header;
