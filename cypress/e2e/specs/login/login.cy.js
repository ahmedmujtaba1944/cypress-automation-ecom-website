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
    Login.verifyLogin();
  });

  it("test case 2: Successful login with Remember Me option selected", () => {
    Login.clickLoginLink();
    Login.enterCredentials(email, password);
    Login.clickRememberMe();
    Login.clickLoginButton();
    Login.verifyLogin();
  });

  it("test case 3:Password reset with unregistered email", () => {
    Login.clickLoginLink();
    Login.clickForgotPasswordLink();
    Login.enterInavlidEamil(invalidEmail);
    Login.clickRecoveryButton();
    Login.notFoundMessage();
  });
  it("test case 4: Successful password reset via email", () => {
    Login.clickLoginLink();
    Login.clickForgotPasswordLink();
    Login.enterInavlidEamil(email);
    Login.clickRecoveryButton();
    Login.forgotSuccessfulSendMessage();
  });

  it("test case 5: Incorrect password for a valid username", () => {
    Login.clickLoginLink();
    Login.enterCredentials(email, invalidPassword);
    Login.clickLoginButton();
    Login.invalidCredentialMessage();
  });

  it.only("test case 6: Empty username field", () => {
    let empEmail = "";

    Login.clickLoginLink();
    Login.enterCredentials(empEmail, invalidPassword);
    Login.clickLoginButton();
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
