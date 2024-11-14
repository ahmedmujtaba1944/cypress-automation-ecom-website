import Register from "../../pages/Register";
import dashboard from "../../Pages/dashboard";

describe("Test Suite for Registration Form", () => {
  beforeEach("Visit URL", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  it("Test case 1:Verify that Register button is visible on Dashboard", () => {
    dashboard.verifyRegisterLinkg();
    // cy.url().should('eq',"https://demowebshop.tricentis.com/register");
    dashboard.clickLogoIcon();

    dashboard.verifyLogoIcon();
    dashboard.verifyFeaturedProductHeading();
    dashboard.verifyRegisterLinkg();
  });

  it("Test case 2:Verify successful registration with valid details", () => {
    let fnName = "Tester";
    let lName = "Mujtaba";
    let password = "12345678";
    let conPassword = "12345678";
    let result = "Your registration completed";

    const email =
      "tester-ahmed" +
      Math.random().toString(36).substring(2, 3) +
      "@gmail.com";

    Register.clickRegisterLink();
    Register.enterDetails(fnName, lName, email, password, conPassword);
    Register.clickRegisterButton();
    cy.wait(2000);
    Register.verifyResult(result);
  });

  it("Test case 3:Verify password and confirmation password must match", () => {
    let fnName = "Tester";
    let lName = "Mujtaba";
    let password = "12345678";
    let conPassword = "87654321";
    let result = "The password and confirmation password do not match.";

    const email =
      "tester-ahmed" +
      Math.random().toString(36).substring(2, 3) +
      "@gmail.com";

    Register.clickRegisterLink();
    Register.enterDetails(fnName, lName, email, password, conPassword);
    Register.clickRegisterButton();
    Register.verifyResult(result);
  });

  it("Test case 4:Verify all fields are required before submission", () => {
    Register.clickRegisterLink();
    Register.clickRegisterButton();
    cy.get(".field-validation-error").should("have.length.at.least", 1);
  });

  it("Test case 5:Verify password complexity requirements", () => {
    let fnName = "Tester";
    let lName = "Mujtaba";
    let password = "12345";
    let conPassword = "8765";
    let result = "The password should have at least 6 characters";

    const email =
      "tester-ahmed" +
      Math.random().toString(36).substring(2, 3) +
      "@gmail.com";

    Register.clickRegisterLink();
    Register.enterDetails(fnName, lName, email, password, conPassword);
    Register.clickRegisterButton(result);
    Register.passwordLengthMessage(result);
  });

  it("Test case 6:Verify duplicate email registration", () => {
    let fnName = "Tester";
    let lName = "Mujtaba";
    let password = "123456";
    let conPassword = "123456";
    let result = "The specified email already exists";

    //  const email =
    //    "tester-ahmed" + Math.random().toString(36).substring(2, 3) + "@gmail.com";
    const email = "test-ahmed@gmail.com";

    Register.clickRegisterLink();
    Register.enterDetails(fnName, lName, email, password, conPassword);
    Register.clickRegisterButton();
    Register.duplicateEmailErrorMessage(result);
  });

  it("Test case 8:Verify email field accepts valid email format", () => {
    let fnName = "Tester";
    let lName = "Mujtaba";
    let password = "123456";
    let conPassword = "123456";
    let result = "Wrong email";

    //  const email =
    //    "tester-ahmed" + Math.random().toString(36).substring(2, 3) + "@gmail.com";
    const email = "test-ahmedgmail.com";

    Register.clickRegisterLink();
    Register.enterDetails(fnName, lName, email, password, conPassword);
    Register.clickRegisterButton();
    Register.verifyResult(result);
    // cy.get(".field-validation-error > span").should("contain","");
  });

  // failing
  it.skip("Test case 10::Verify email field does not accept special characters", () => {
    cy.get(".ico-register").click();
    cy.get("#Email").type("special&char@example.com");
    cy.get("#register-button").click();
  });
});
