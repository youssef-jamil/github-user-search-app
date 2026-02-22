// import elements
import { cardsElement } from "./element";

const setSearchResult = (data) => {
  let resultContainer = "";
  if (data === null) {
    resultContainer = "";
  } else if (data.length === 0) {
    resultContainer = "<p class='message'>No results found 😞</p>";
  } else {
    data.map((item) => {
      resultContainer += `
      <article class = "card">
        <img  class="img" src="${item.avatar_url}" alt="${item.login}" loading="lazy" />
        <h2 class="name">${item.login}</h2>
      </article>
    `;
    });
  }
  cardsElement.innerHTML = resultContainer;
};

export default setSearchResult;
