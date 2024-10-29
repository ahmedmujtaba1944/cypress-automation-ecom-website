
describe("test suite for dashboard", () => {

    beforeEach("visit url", () => {
        cy.visit("https://demowebshop.tricentis.com/");
    });
    it("test case 1: Verify that the Dashboard page loads successfully", () => {
      cy.get(".header-logo > a > img").should("be.visible");
      cy.get(".ico-register").should("be.visible");
      cy.get(".search-box-button").should("be.visible");
      cy.get("#newsletter-subscribe-button").should("be.visible");
      cy.get("#vote-poll-1").should("be.visible");
    });

   
    it("test case 2: Verify that featured products are displayed on the Dashboard", () => {
      cy.get(".product-grid > .title > strong").should("be.visible");
      cy.get(":nth-child(2) > .product-item > .picture > a > img").should(
        "be.visible"
      );
      cy.get(
        ":nth-child(2) > .product-item > .details > .product-title > a"
      ).should("be.visible");
      cy.get(
        ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
      ).should("be.visible");
    });


        it("test case 3: Verify that clicking on a product navigates to the product page", () => {
          cy.get(
            ":nth-child(2) > .product-item > .details > .product-title > a"
          ).click();
          cy.get("#main-product-img-2").should("be.visible");
          cy.get(".short-description").should("be.visible");
          cy.get(".full-description").should("be.visible");

          cy.get(".header-logo > a > img").click();

          cy.get(
            ":nth-child(3) > .product-item > .details > .product-title > a"
          ).click();
          cy.get("#main-product-img-31").should("be.visible");
          cy.get(".price-value-31").should("be.visible");
        });
    
    
    it("test case 4: Verify the functionality of the search bar on the Dashboard", () => {
      cy.get("#small-searchterms").type("cell phone");
      cy.get(".search-box-button").click();

      //   cy.url().should("include", "search?q=cell+phone");
      //     cy.get(".product-item").should("contain", "Cell Phone");
      cy.get(".product-title > a").should("contain", "Cell Phone");
    });

   it("test case 5: Verify that the website full logo with its navigation to main page is working", () => {
   
        cy.get(".top-menu > :nth-child(4) > a").click();
        cy.get("h1").should("contain", "Apparel & Shoes");
        cy.get(".header-logo > a > img").click();
        cy.get(".ico-register").should("be.visible");
        cy.get(".search-box-button").should("be.visible");
        cy.get("#newsletter-subscribe-button").should("be.visible");
        cy.get("#vote-poll-1").should("be.visible");
   });
    
     it.only("test case 6: Verify Register on Dashboard", () => {
       cy.get(".ico-register").click();
         cy.get("h1").should("contain", "Register");
         cy.get(".page-body > :nth-child(2) > .title > strong").should(
           "contain",
           "Your Personal Details"
         );
       cy.get(".header-logo > a > img").click();
       cy.get(".ico-register").should("be.visible");
       cy.get(".search-box-button").should("be.visible");
       cy.get("#newsletter-subscribe-button").should("be.visible");
       cy.get("#vote-poll-1").should("be.visible");
     });
    
    

});
