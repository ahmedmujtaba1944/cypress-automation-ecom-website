import SearchObjects from "../fixtures/PageObjects/Search.json";
import ItemData from "../fixtures/TestData/item.json";

class Search {
  static searchProductBook() {
    cy.get(SearchObjects.field_searchBar).type(ItemData.Books.item1);
    cy.get(SearchObjects.button_search).eq(0).click();
  }
  static searchProductJewelry() {
    cy.get(SearchObjects.field_searchBar).type(ItemData.Jewelry.item1);
    cy.get(SearchObjects.button_search).eq(0).click();
    Apparel & Shoes;
  }
  static searchProductApparel() {
    cy.get(SearchObjects.field_searchBar).type(ItemData.ApparelShoes.item1);
    cy.get(SearchObjects.button_search).eq(0).click();
  }
}

export default Search;
