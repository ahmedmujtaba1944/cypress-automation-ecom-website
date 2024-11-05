describe("test suite for product detail page", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });
 
    it("test case 1: Verify PDP loads correctly for each product type", () => {
      
     cy.get(".top-menu > :nth-child(4) > a").click();
     cy.get("h1").should("contain", "Apparel & Shoes");
        cy.get(":nth-child(1) > .product-item > .details > .product-title > a").click();
        cy.get("#main-product-img-5").should('be.visible');
    cy.get(".header-logo > a > img").click();

    cy.get(
      ":nth-child(3) > .product-item > .details > .product-title > a"
    ).click();
    cy.get("#main-product-img-31").should("be.visible");
    cy.get(".price-value-31").should("be.visible");
    });
    
     it("test case 2: Verify product title,image,price,description,availability displays correctly", () => {
       cy.get(".top-menu > :nth-child(4) > a").click();
       cy.get("h1").should("contain", "Apparel & Shoes");
       cy.get(
         ":nth-child(1) > .product-item > .details > .product-title > a"
       ).click();
       cy.get("#main-product-img-5").should("be.visible");
         cy.get(".header-logo > a > img").click();
         cy.get('.product-name').should('contain', "50's Rockabilly Polka Dot Top JR Plus Size");
         cy.get(".value").should("contain", "In stock");
         cy.get(".price-value-5").should('contain', '11.00');
         cy.get(".full-description").should('be.visible')
       
       
     });

      it("test case 3: Verify 'Add to Cart' button functionality", () => {
        cy.get(".top-menu > :nth-child(4) > a").click();
        cy.get("h1").should("contain", "Apparel & Shoes");
        cy.get(
          ":nth-child(1) > .product-item > .details > .product-title > a"
        ).click();
          cy.get("#add-to-cart-button-5").click();
          cy.get(".content").should(
            "contain",
            "The product has been added to your shopping cart"
          );
          cy.get(".cart-qty").should("be.visible");
      });
    
     it("test case 4: Verify default sorting by position", () => {
       cy.get(".top-menu > :nth-child(4) > a").click();
       cy.get("h1").should("contain", "Apparel & Shoes");
       cy.get(
         ":nth-child(1) > .product-item > .details > .product-title > a"
       ).click();
        cy.get("#products-orderby").should("contain", "Position");
     });
  
  it.only("tes  case 5: Verify no ATC button when adding an out-of-stock item to the cart", () => {
    cy.get(".top-menu > :nth-child(6) > a").click();
    cy.get(":nth-child(3) > .product-item > .details > .product-title > a").click();
    cy.get(".value").should("contain", "Out of stock");

    cy.contains('Add to cart').should('not.exist');
  });
    
   
    
    
  
});
