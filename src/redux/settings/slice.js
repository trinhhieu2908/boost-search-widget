import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isSuggestionDisplay: true,
  isCollectionDisplay: true,
  isProductDisplay: true,
  numberOfCharacter: { value: 1, label: "1 character" },
};

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSuggestionSetting: (state, { payload }) => {
      state.isSuggestionDisplay = payload;
    },
    toggleCollectionSetting: (state, { payload }) => {
      state.isCollectionDisplay = payload;
    },
    toggleProductionSetting: (state, { payload }) => {
      state.isProductDisplay = payload;
    },
    setNumberOfCharacter: (state, { payload }) => {
      state.numberOfCharacter = payload;
    },
  },
});

export const { name, actions, reducer } = settingSlice;
