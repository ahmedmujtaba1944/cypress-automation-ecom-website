import RegisterObjects from "../fixtures/PageObjects/Register.json";

class Register {
  static clickRegisterLink() {
    cy.get(RegisterObjects.register_link).click();
  }

  static verifyPersoanlDetailTitle() {
    cy.get(RegisterObjects.verify_personal_detail_title).should(
      "contain",
      "Your Personal Details"
    );
  }
  static enterDetails(fnName, lName, email, password, conPassword) {
    cy.get(RegisterObjects.click_radio).first().check();
    cy.get(RegisterObjects.enter_firstname).type(fnName);
    cy.get(RegisterObjects.enter_lastname).type(lName);
    cy.get(RegisterObjects.enter_email).type(email);
    cy.get(RegisterObjects.enter_password).type(password);
    cy.get(RegisterObjects.enter_confirm_password).type(conPassword);
  }

  static clickRegisterButton() {
    cy.get(RegisterObjects.click_register_button).click();
  }

  static verifyResult(result) {
    cy.contains(result).should("exist");
  }

  static passwordLengthMessage(result) {
    cy.contains(result).should("exist");
  }
  static duplicateEmailErrorMessage(result) {
    // cy.contains(result).should("exist");
    cy.wait(2000);
    cy.get(RegisterObjects.duplicate_email_error_message).should(
      "contain",
      "The specified email already exists"
    );
  }
}

export default Register;
