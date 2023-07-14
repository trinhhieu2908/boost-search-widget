const getIsSuggestionDisplay = (state) => state?.settings?.isSuggestionDisplay;

const getIsCollectionDisplay = (state) => state?.settings?.isCollectionDisplay;

const getIsProductDisplay = (state) => state?.settings?.isProductDisplay;

const getNumberOfCharacter = (state) => state?.settings?.numberOfCharacter;

export const settingsSelectors = {
  getIsSuggestionDisplay,
  getIsCollectionDisplay,
  getIsProductDisplay,
  getNumberOfCharacter,
};
