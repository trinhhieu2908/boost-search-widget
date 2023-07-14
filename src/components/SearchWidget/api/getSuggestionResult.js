import { findProducts, findSuggestion } from "../utils/functions/findSuggestion";

export const getSuggestionResult = async (search) => {
  const data = await fetch(
    "https://mocki.io/v1/60e605a6-0628-4aa4-beff-1cec27631ce1"
  ).then((res) => res.json());
  const suggestions = findSuggestion("term", data.suggestions, search, 4);
  const collections = findSuggestion("title", data.collections, search, 2);
  const products = findProducts("title", data.products, search, 6);
  const response = {
    products: products,
    suggestions: suggestions,
    collections: collections,
  };
  return response;
};
