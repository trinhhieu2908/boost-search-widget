import WidgetCollection from "./WidgetCollection/WidgetCollection";
import WidgetProduct from "./WidgetProduct/WidgetProduct";
import WidgetSuggestion from "./WidgetSuggestion/WidgetSuggestion";

const SearchWidget = ({ id }) => {
  return (
    <div id={id} className="search-widget">
      <div className="search-widget-content">
        <div className="search-group">
          <WidgetSuggestion />
          <WidgetCollection />
          <WidgetProduct />
        </div>
        <div className="view-all">View all products</div>
      </div>
    </div>
  );
};

export default SearchWidget;
