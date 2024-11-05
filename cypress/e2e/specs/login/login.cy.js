describe("test suite for dashboard", () => {

    let email = "test-ahmed@yopmail.com";
    let password = "12345678";
    let invalidEmail = "test-fake@yopmail.com";
    let invalidPassword = "123456";

  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });
    
    
  it("test case 1: Valid username and password combination", () => {
    cy.get(".ico-login").click();
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("form > .buttons > .button-1").click();
    cy.get(".header-links > ul > :nth-child(1) > .account").contains(email);
  });
    
      it("test case 2: Successful login with Remember Me option selected", () => {
        cy.get(".ico-login").click();
        cy.get("#Email").type(email);
          cy.get("#Password").type(password);
          cy.get("#RememberMe").click();
        cy.get("form > .buttons > .button-1").click();
        cy.get(".header-links > ul > :nth-child(1) > .account").contains(email);
      });
    
      it("test case 3:Password reset with unregistered email", () => {
          cy.get(".ico-login").click();
          cy.get(".forgot-password > a").click();
          cy.get("#Email").type(invalidEmail);
          cy.get('form > .buttons > .button-1').click();
          cy.get(".result").should("contain", "Email not found.");
 
      });
     it("test case 4: Successful password reset via email", () => {
       cy.get(".ico-login").click();
       cy.get(".forgot-password > a").click();
       cy.get("#Email").type(email);
       cy.get("form > .buttons > .button-1").click();
       cy.get(".result").should(
         "contain",
         "Email with instructions has been sent to you."
       );
     });
    
    it("test case 5: Incorrect password for a valid username", () => {
     cy.get(".ico-login").click();
     cy.get("#Email").type(email);
     cy.get("#Password").type(invalidPassword);
     cy.get("form > .buttons > .button-1").click();
      cy.get(".validation-summary-errors > span").should(
        "contain",
        "Login was unsuccessful. Please correct the errors and try again."
      );
        cy.get(".validation-summary-errors > ul > li").should(
          "contain",
          "The credentials provided are incorrect"
        );
    });

      it.only("test case 6: Empty username field", () => {
     cy.get(".ico-login").click();
    //  cy.get("#Email").type(email);
     cy.get("#Password").type(password);
     cy.get("form > .buttons > .button-1").click();
      cy.get(".validation-summary-errors > span").should(
        "contain",
        "Login was unsuccessful. Please correct the errors and try again."
      );
        cy.get(".validation-summary-errors > ul > li").should(
          "contain",
          "No customer account found"
        );
    });
    
    
    
});
