import dashboard from "../../Pages/dashboard";
import Register from "../../pages/Register";

describe("test suite for dashboard", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });
  it("test case 1: Verify that the Dashboard page loads successfully", () => {
    dashboard.verifyLogoIcon();
    dashboard.verifyFeaturedProductHeading();
    dashboard.verifyRegisterLinkg();
  });

  it("test case 2: Verify that featured products are displayed on the Dashboard", () => {
    dashboard.verifyFeaturedProductHeading();
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
    dashboard.verifyRegisterLinkg();
    Register.clickRegisterButton();
    Register.verifyPersoanlDetailTitle();
    dashboard.clickLogoIcon();

    dashboard.verifyLogoIcon();
    dashboard.verifyFeaturedProductHeading();
    dashboard.verifyRegisterLinkg();
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

  it("test case 6: Verify Register on Dashboard", () => {
    dashboard.verifyRegisterLinkg();
    Register.clickRegisterButton();
    Register.verifyPersoanlDetailTitle();
    dashboard.clickLogoIcon();

    dashboard.verifyLogoIcon();
    dashboard.verifyFeaturedProductHeading();
    dashboard.verifyRegisterLinkg();
  });
});
