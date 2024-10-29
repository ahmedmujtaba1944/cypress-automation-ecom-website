describe("test suite for add to cart page", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });
  it("test case 1: Verify adding a product to the cart from the product listing page", () => {
    cy.get(".top-menu > :nth-child(5) > a").click();
    cy.get(
      ":nth-child(1) > .product-item > .details > .product-title > a"
    ).click();
    cy.get("#add-to-wishlist-button-53").click();
    cy.get(".content").should(
      "contain",
      "The product has been added to your wishlist"
    );
    cy.get(".wishlist-qty").should("be.visible");
    cy.get(".ico-wishlist > .cart-label").click();
    cy.get(".product > a").should("contain", "3rd Album");
  });
});
