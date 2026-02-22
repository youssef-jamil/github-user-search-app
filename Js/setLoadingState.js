import { loadingElement } from "./element";
import setSearchResult from "./searchResult";

export default function (loading) {
  loadingElement.classList.toggle("hidden", !loading);
  loading && setSearchResult(null);
}
