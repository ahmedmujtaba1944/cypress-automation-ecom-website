import Login from "../../../pages/Login";

describe("Test suite for Login page", () => {
  let email = "test-ahmed@yopmail.com";
  let password = "12345678";
  let invalidEmail = "test-fake@yopmail.com";
  let invalidPassword = "123456";

  beforeEach("Visit URL", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  it("Test case 1: Valid username and password combination", () => {
    Login.clickLoginLink();
    Login.enterCredentials(email, password);
    Login.clickLoginButton();
  });

  it("test case 2: Successful login with Remember Me option selected", () => {
      Login.clickLoginLink();
      Login.enterCredentials(email, password);
      Login.clickRememberMe();
      Login.clickLoginButton();
  });

  it("test case 3:Password reset with unregistered email", () => {
    cy.get(".ico-login").click();
    cy.get(".forgot-password > a").click();
    cy.get("#Email").type(invalidEmail);
    cy.get("form > .buttons > .button-1").click();
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

  it("test case 6: Empty username field", () => {
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
