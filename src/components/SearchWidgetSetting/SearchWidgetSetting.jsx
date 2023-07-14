import React, { useState } from "react";
import Select from "react-select";
import DisplaySettingItem from "./DisplaySettingItem";
import { actions as settingActions } from "../../redux/settings/slice";
import { settingsSelectors } from "../../redux/settings/selector";
import { useDispatch, useSelector } from "react-redux";
import { optionsCharacter } from "./constants/optionCharacter";

const SearchWidgetSetting = () => {
  const dispatch = useDispatch();

  const isSuggestionDisplay = useSelector(
    settingsSelectors.getIsSuggestionDisplay
  );
  const isCollectionDisplay = useSelector(
    settingsSelectors.getIsCollectionDisplay
  );
  const isProductDisplay = useSelector(settingsSelectors.getIsProductDisplay);

  const numberOfCharacter = useSelector(settingsSelectors.getNumberOfCharacter);

  return (
    <div className="search-widget-setting">
      <p className="setting-header">Setting</p>
      <div className="setting-main">
        <DisplaySettingItem
          name="Suggestion"
          isDisplay={isSuggestionDisplay}
          action={settingActions.toggleSuggestionSetting}
        />
        <DisplaySettingItem
          name="Collection"
          isDisplay={isCollectionDisplay}
          action={settingActions.toggleCollectionSetting}
        />
        <DisplaySettingItem
          name="Product"
          isDisplay={isProductDisplay}
          action={settingActions.toggleProductionSetting}
        />
        <div className="setting-item">
          <p>Number Character:</p>
          <Select
            defaultValue={numberOfCharacter}
            onChange={(value) =>
              dispatch(settingActions.setNumberOfCharacter(value))
            }
            options={optionsCharacter}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchWidgetSetting;
