/*
  [x] Create a function => performSearch(searchTerm , searchType)
  [x] call performSearch inside Button event listener
! performSearch
  [x] fetch data form url
  [-]if ok show data in the page
    ?  if not ok show error message in the page

*/

import {
  buttonElement,
  searchInputElement,
  userTypeElement,
  cardsElement
} from "./element.js";
import performSearch from "./performSearch.js";

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInputElement.value, userTypeElement.checked);
});
