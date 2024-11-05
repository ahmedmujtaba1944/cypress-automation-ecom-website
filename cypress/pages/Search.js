import SearchObjects from "../fixtures/PageObjects/Search.json";
import ItemsData from "../fixtures/TestData/Items.json";

class Search {
  static searchProduct() {
    cy.get(SearchObjects.field_searchBar).type(ItemsData.Books.item1);
    cy.get(SearchObjects.button_search).eq(0).click();
  }
}

export default Search;
