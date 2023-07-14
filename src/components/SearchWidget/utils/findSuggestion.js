import { checkUndefined } from "./checkUndefined";

export function findSuggestion(property, array, search, limit) {
  const result = [];
  let searchString = checkUndefined(search);
  searchString = searchString.toLowerCase();
  for (let item of array) {
    if (result.length >= limit) break;
    const itemString = item[property].toLowerCase();
    const arrayItemString = itemString.split(" ");
    let isPushed = false;
    arrayItemString.forEach((element) => {
      if (
        !isPushed &&
        (searchString === "" || element.startsWith(searchString))
      ) {
        result.push(item);
        isPushed = true;
      }
    });
  }
  return result;
}

export function findProducts(property, array, search, limit) {
  const result = [];
  let searchString = checkUndefined(search);
  searchString = searchString.toLowerCase();
  for (let item of array) {
    if (result.length >= limit) break;
    const itemString = item[property].toLowerCase();
    if(itemString.indexOf(searchString) > -1){
      result.push(item);
    }
  }
  if(result.length === 0){
    return array.slice(0, limit);
  }
  return result;
}
