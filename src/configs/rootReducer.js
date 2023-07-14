import { combineReducers } from "@reduxjs/toolkit";
import { reducer as settingsReducer } from "../redux/settings/slice";

const createReducer = (injectedReducers = {}) => {
  const appReducer = combineReducers({
    settings: settingsReducer,
    ...injectedReducers,
  });

  return appReducer;
};

export default createReducer;
