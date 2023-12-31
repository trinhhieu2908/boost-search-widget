# boost-search-widget

This is an Auto-suggestion search widget

## Usage

Assume you have an existing search input in your application like this

```javascript
import { useState } from "react";

export default const App = () => {
    const [searchValue, setSearchValue] = useState("");

    const onSearch = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="app">
            <div className="app-content">
                <input 
                    type="text"
                    onChange={onSearch}
                    placeholder="Search auto suggestions"
                />
            </div>
        </div>
    );
};
```

Now you want to implement Auto-suggestion search widget to your search input

```javascript
import { useState } from "react";
import SearchWidget from "./auto-suggestions-search-widget/SearchWidget/SearchWidget";

export default const App = () => {
    const [searchValue, setSearchValue] = useState("");

    const onSearch = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="app">
            <div className="app-content">
                <input 
                    type="text"
                    onChange={onSearch}
                    placeholder="Search auto suggestions"
                    id="app-search-input"
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
```

## Props
Common props you must provide to use the widget include:

* inputId - the id of the input element
* widgetId - the id of the widget element
* searchString - the value of the search input

Other props you may want to specify:

* position - the position of the widget to display with the search input

### Keywords
```diff
- auto-suggest-search-widget - widget - react
```