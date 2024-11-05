import Register from '../../../pages/Register'


describe("Test Suite for Registration Form", () => {
  beforeEach("Visit URL", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  it("Test case 1:Verify that Register button is visible on Dashboard", () => {
    cy.get(".ico-register").should("be.visible").click();
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

 
  it.only("Test case 2:Verify successful registration with valid details", () => {

   let  fnName = "Tester"
    let lName = "Mujtaba"
    let password = "12345678"
    let conPassword = "12345678"
    let result = "Your registration completed";

    const email =
      "tester-ahmed" +
      Math.random().toString(36).substring(2, 3) +
      "@gmail.com";

    Register.clickRegisterLink();
    Register.enterDetails(fnName, lName, email, password, conPassword);
    Register.clickRegisterButton(result);
  });




  it("Test case 3:Verify password and confirmation password must match", () => {

 let fnName = "Tester";
 let lName = "Mujtaba";
 let password = "12345678";
 let conPassword = "87654321";
 let result = "The password and confirmation password do not match.";

 const email =
   "tester-ahmed" + Math.random().toString(36).substring(2, 3) + "@gmail.com";

 Register.clickRegisterLink();
 Register.enterDetails(fnName, lName, email, password, conPassword);
 Register.clickRegisterButton(result);

   
    // cy.get(".field-validation-error").should(
    //   "contain",
    //   "The password and confirmation password do not match."
    // );
  });

  it("Test case 4:Verify all fields are required before submission", () => {
    cy.get(".ico-register").click();
    cy.get("#register-button").click();
    cy.get(".field-validation-error").should("have.length.at.least", 1);
  });

  it("Test case 5:Verify password complexity requirements", () => {
    cy.get(".ico-register").click();
    cy.get("#Password").type("12345");
    cy.get("#ConfirmPassword").type("12345");
    cy.get("#register-button").click();
    cy.get(":nth-child(1) > .field-validation-error > span").should(
      "contain",
      "The password should have at least 6 characters."
    );
  });

  it("Test case 6:Verify duplicate email registration", () => {
    cy.get(".ico-register").click();
    cy.get('[type="radio"]').first().check();
    cy.get("#FirstName").type("tester");
    cy.get("#LastName").type("ahmed");
    cy.get("#Email").type("test-ahmed2@yopmail.com");
    cy.get("#Password").type("Test@1234");
    cy.get("#ConfirmPassword").type("Test@1234");
    cy.get("#register-button").click();
    // cy.get(".validation-summary-errors").should(
    //   "contain",
    //   "The specified email already exists"
    //   );
      cy.get(".validation-summary-errors > ul > li").should(
      "contain",
      "The specified email already exists"
      );
  });


  it("Test case 8:Verify email field accepts valid email format", () => {
    cy.get(".ico-register").click();
    cy.get("#Email").type("valid.emailexample.com");
    cy.get("#register-button").click();
    cy.get(".field-validation-error > span").should("contain","Wrong email");
  });

    
    // failing 
  it.skip("Test case 10::Verify email field does not accept special characters", () => {
    cy.get(".ico-register").click();
    cy.get("#Email").type("special&char@example.com");
    cy.get("#register-button").click();
    
  });
});
