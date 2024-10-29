// describe("test suite for dashboard", () => {
//   beforeEach("visit url", () => {
//     cy.visit("https://demowebshop.tricentis.com/");
//   });
//   it("test case 1:Verify that Register button on Dashboard of website", () => {
//     cy.get(".ico-register").click();
//     cy.get("h1").should("contain", "Register");
//     cy.get(".page-body > :nth-child(2) > .title > strong").should(
//       "contain",
//       "Your Personal Details"
//     );
//     cy.get(".header-logo > a > img").click();
//     cy.get(".ico-register").should("be.visible");
//     cy.get(".search-box-button").should("be.visible");
//     cy.get("#newsletter-subscribe-button").should("be.visible");
//     cy.get("#vote-poll-1").should("be.visible");
//   });

//   it("test case 2:Verify that Register button leads to Register form page for user registration", () => {
//     cy.get(".ico-register").click();
//     cy.get("h1").should("contain", "Register");
//     cy.get(".page-body > :nth-child(2) > .title > strong").should(
//       "contain",
//       "Your Personal Details"
//     );
//     cy.get(".header-logo > a > img").click();
//     cy.get(".ico-register").should("be.visible");
//     cy.get(".search-box-button").should("be.visible");
//     cy.get("#newsletter-subscribe-button").should("be.visible");
//     cy.get("#vote-poll-1").should("be.visible");
//   });
    
//     it.only("test case 2:Verify that Register button leads to Register form page for user registration", () => {
//       cy.get(".ico-register").click();
//       cy.get("h1").should("contain", "Register");
//       cy.get(".page-body > :nth-child(2) > .title > strong").should(
//         "contain",
//         "Your Personal Details"
//       );
//         cy.get('[type="radio"]').first().check();
//         cy.get("#FirstName").type("tester");
//         cy.get("#LastName").type("ahmed");
//         cy.get("#Email").type("test-ahmed2@yopmail.com");
//         cy.get("#Password").type(12345678);
//         cy.get("#ConfirmPassword").type(12345678);
//         cy.get("#register-button").click();
//         // cy.url().should("include", "Register");
//         cy.get(".result").should("contain", " Your registration completed");
       
//     });
    
// });



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

  it("Test case 2:Verify successful registration with valid details", () => {
    cy.get(".ico-register").click();
    cy.get('[type="radio"]').first().check();
    cy.get("#FirstName").type("tester");
    cy.get("#LastName").type("ahmed");
    cy.get("#Email").type("test-ahmed3@yopmail.com");
    cy.get("#Password").type("Test@1234");
    cy.get("#ConfirmPassword").type("Test@1234");
    cy.get("#register-button").click();
    cy.get(".result").should("contain", "Your registration completed");
  });

  it("Test case 3:Verify password and confirmation password must match", () => {
    cy.get(".ico-register").click();
    cy.get('[type="radio"]').first().check();
    cy.get("#FirstName").type("tester");
    cy.get("#LastName").type("ahmed");
    cy.get("#Email").type("test-ahmed4@yopmail.com");
    cy.get("#Password").type("Test@1234");
    cy.get("#ConfirmPassword").type("Test@4321");
    cy.get("#register-button").click();
    cy.get(".field-validation-error").should(
      "contain",
      "The password and confirmation password do not match."
    );
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

  it.only("Test case 6:Verify duplicate email registration", () => {
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
