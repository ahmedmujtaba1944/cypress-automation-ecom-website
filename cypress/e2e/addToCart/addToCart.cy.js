import ATC from "../../pages/ATC";
import PDP from "../../pages/PDP";
import PLP from "../../pages/PLP";

import Search from "../../pages/Search";

// import ATC from "../../Pages/ATC"

let notification = "The product has been added to your shopping cart";
let empltyCart_message = "Your Shopping Cart is empty!";
describe("test suite for add to cart page", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  //test case 1
  it("test case 1: Verify adding a product to the cart from the product listing page", () => {
    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.clickCartIcon();
  });

  //test case 2
  it("Test Case 2: Verify that the cart displays the correct product count afteradding multiple items", () => {
    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.verifyCartQty(1);
    // ATC.clickCartIcon();
  });

  it("test case 3:Verify that the remove item from the cart", () => {
    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    ATC.clickCartIcon();
    ATC.clickCartRemove();
    ATC.clickCartUpdateButton();
    ATC.verifyCartEmpty(empltyCart_message);

    // Your Shopping Cart is empty!
  });

  it("test case 4: Verify updating item quantity in the cart", () => {
    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.verifyCartQty(1);
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.verifyCartQty(2);
  });

  it("test case 5: Verify emptying the cart removes all items", () => {
    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.clickCartIcon();
    cy.wait(1000);
    ATC.clickCartRemove();
    ATC.clickCartUpdateButton();
    cy.wait(1000);
    ATC.verifyCartEmpty(empltyCart_message);
  });
});
