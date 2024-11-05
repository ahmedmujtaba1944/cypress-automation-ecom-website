import ATC from "../../../pages/ATC";
import PDP from "../../../pages/PDP";

let notification = "The product has been added to your shopping cart";
describe("test suite for add to cart page", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  
  //test case 1
  it.only("test case 1: Verify adding a product to the cart from the product listing page", () => {
  
    PDP.selectItem();
    ATC.clickCartButton(notification)

  });

  //test case 2
  it("Verify that the cart displays the correct product count afteradding multiple items", () => {
    cy.get(".top-menu > :nth-child(6) > a").click();
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your shopping cart"
    );
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your shopping cart"
    );
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your shopping cart"
    );
    cy.wait(2000);
    cy.get(".cart-qty").should("contain", 3);
  });




  it("Verify that the remove item from the cart", () => {
    cy.get(".top-menu > :nth-child(6) > a").click();
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your shopping cart"
    );
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your shopping cart"
    );
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your shopping cart"
    );
    cy.wait(2000);

    cy.get(".ico-cart > .cart-label").click();
    cy.get(".remove-from-cart > input").check();
    cy.get(".update-cart-button").click();

    cy.contains("Your Shopping Cart is empty!").should("exist");
    // Your Shopping Cart is empty!
  });






  it("Verify updating item quantity in the cart", () => {
    cy.get(".top-menu > :nth-child(1) > a").click();

    // adding first item to cart
    cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click();
    cy.get(".content").should("contain", "The product has been added to your shopping cart");
    cy.wait(2000);
    cy.get(".cart-qty").should("contain", 1);


    cy.get(".ico-cart > .cart-label").click();
    cy.contains("Shopping cart").should('exist');
    cy.url().should("eq", "https://demowebshop.tricentis.com/cart");
    cy.get(".product-name").should("contain", "Computing and Internet");



    // going back to books pdp
    cy.get(".top-menu > :nth-child(1) > a").click();
    
    // adding second item to cart
    cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click();
    cy.get(".content").should("contain", "The product has been added to your shopping cart");
    cy.wait(2000);
    cy.get(".cart-qty").should("contain", 2);

    cy.get(".ico-cart > .cart-label").click();
    cy.contains("Shopping cart").should("exist");
    cy.url().should("eq", "https://demowebshop.tricentis.com/cart");
    cy.get(".product-name").should("contain", "Fiction");
  });





  it("Verify emptying the cart removes all items", () => {
    cy.get(".top-menu > :nth-child(1) > a").click();

    // adding first item to cart
    cy.get(
      ":nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your shopping cart"
    );
    cy.wait(2000);
    cy.get(".cart-qty").should("contain", 1);

    cy.get(".ico-cart > .cart-label").click();
    cy.contains("Shopping cart").should("exist");
    cy.url().should("eq", "https://demowebshop.tricentis.com/cart");
    cy.get(".product-name").should("contain", "Computing and Internet");

    cy.get(".remove-from-cart > input").check();
    cy.get(".update-cart-button").click();

    cy.contains("Your Shopping Cart is empty!").should('exist');
    
  });
});
