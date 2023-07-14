import WidgetCollection from "./WidgetCollection/WidgetCollection";
import WidgetProduct from "./WidgetProduct/WidgetProduct";
import WidgetSuggestion from "./WidgetSuggestion/WidgetSuggestion";
import { useGetSuggestionResult } from "../hooks/useGetSuggestionResult";
import { useSelector } from "react-redux";
import { settingsSelectors } from "../../../redux/settings/selector";
import {
  onDisplaySearchWidget,
  onHideSearchWidget,
} from "../utils/functions/displayFunction";
import { useEffect } from "react";

const SearchWidget = ({ inputId, widgetId, position, searchString }) => {
  const { data, error } = useGetSuggestionResult(searchString);
  const isSuggestionDisplay = useSelector(
    settingsSelectors.getIsSuggestionDisplay
  );
  const isCollectionDisplay = useSelector(
    settingsSelectors.getIsCollectionDisplay
  );
  const isProductDisplay = useSelector(settingsSelectors.getIsProductDisplay);
  const numberOfCharacter = useSelector(settingsSelectors.getNumberOfCharacter);

  useEffect(() => {
    if (searchString.length >= numberOfCharacter.value) {
      onDisplaySearchWidget(inputId, widgetId, position);
    } else {
      onHideSearchWidget(widgetId);
    }
  }, [searchString, numberOfCharacter]);

  let content = (
    <div className="search-group">
      {data && data.suggestions.length > 0 && isSuggestionDisplay && (
        <WidgetSuggestion data={data.suggestions} searchString={searchString} />
      )}
      {data &&
        data.collections.length > 0 &&
        searchString.length > 0 &&
        isCollectionDisplay && <WidgetCollection data={data.collections} />}
      {data && isProductDisplay && <WidgetProduct data={data.products} />}
    </div>
  );
  if (error) {
    content = (
      <div className="search-group">
        <p>There are some error when finding products</p>
        <div className="view-all">View all products</div>
      </div>
    );
  }

  return (
    <div id={widgetId} className="search-widget">
      <div className="search-widget-content">
        {content}
        <div className="view-all">View all products</div>
      </div>
    </div>
  );
};

export default SearchWidget;
