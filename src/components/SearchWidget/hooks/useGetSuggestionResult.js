import { useQuery } from "react-query";
import { getSuggestionResult } from "../api/getSuggestionResult";

export const useGetSuggestionResult = (search) => {
  return useQuery(["searchString", search], () => getSuggestionResult(search));
};
