import { useState } from "react";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchWidget from "./components/SearchWidget/SearchWidget";

function App() {
  const [mainSearchValue, setMainSearchValue] = useState("");

  const onSearch = (event) => {
    console.log(event.target.value);
  };

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
    <>
      <Header />
      <div className="app-content">
        <SearchInput
          className="search-main"
          id="large-search"
          onFocus={onFocusSearch}
          onBlur={onFocusOutSearch}
          placeholder="Type here to search"
          onChange={onSearch}
        />
        <SearchWidget id="main-search-widget" />
      </div>
    </>
  );
}

export default App;
