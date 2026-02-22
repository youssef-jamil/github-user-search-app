// import setSearchResult function
import { cardsElement } from "./element.js";
import setSearchResult from "./searchResult.js";
// import setMessage function
import setMessage from "./setMessage.js";
import getMessage from "./getMessage.js";
import setLoadingState from "./setLoadingState.js";

// link to the API
const USER_URL = "https://api.github.com/search/users?q=";
// Perform search function
const performSearch = (searchTerm, searchType) => {
  const typeQuery = searchType ? "+type:user" : "+type:org";
  getMessage("") && setMessage("");
  if (!searchTerm.trim()) {
    /* cardsElement.innerHTML =
      "<p class='message'>Please enter a search term</p>"; */
    setMessage("Please enter a search term ☝️");
    return;
  }
  setLoadingState(true);
  fetch(`${USER_URL}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoadingState(false))
    .catch((error) => {
      setMessage("An error occurred while fetching data 😞");
      console.error("Error fetching data:", error);
    });
};

export default performSearch;
