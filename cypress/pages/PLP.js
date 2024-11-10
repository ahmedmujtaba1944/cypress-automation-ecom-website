import Search from "./Search";
import PLPObject from "../fixtures/PageObjects/PLP.json";
import ItemData from "../fixtures/TestData/item.json";
class PLP {
  static clickNabar4() {
    cy.get(PLPObject.click_navbar).click();
  }
  static clickFirstItem() {
    cy.get(PLPObject.click_first_item).click();
  }
  static verifyPageTitle(title) {
    cy.get(PLPObject.verify_page_title).should("have.text", title);
  }
  static verifySortValue(value) {
    // cy.get(PLPObject.verify_product_sort_value).should("have.text", value);
    cy.get(PLPObject.verify_product_sort_value).should("contain", value);
  }
  static clickSortByPriceLowToHigh() {
    cy.get(PLPObject.verify_product_sort_value).select("Price: Low to High");
    //   .invoke("val")
    //   .should("eq", "Price: Low to High");
  }
  static verifyItemTitle() {
    cy.get(PLPObject.item_title).should("contain", ItemData.Jewelry.item1);
  }

  static clickItemWithNoAddToCart() {
    cy.get(PLPObject.click_item_with_no_addtocart).click();
  }
}

export default PLP;
