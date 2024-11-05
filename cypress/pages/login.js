
import LoginObjects from "../fixtures/PageObjects/Login.json";

let Email;
class Login {
    static clickLoginLink() {
      cy.get(LoginObjects.login_link).click();
    }

    static enterCredentials(email, password) {
      Email = email;
      cy.get(LoginObjects.enter_email).type(email);
      cy.get(LoginObjects.enter_password).type(password);
    }

    static clickRememberMe() {
      cy.get(LoginObjects.click_rememberme).click();
    }

    static clickLoginButton() {
      cy.get(LoginObjects.click_login_button).click();
      
  }
  static verifyLogin() {
    // Verify that the user is logged in by checking the account element contains the email
    cy.get(LoginObjects.verify_login).should("contain", Email);
  }

    static clickForgotPasswordLink() {
      cy.get(LoginObjects.forgot_password_link).click();
    }
    static enterInavlidEamil(email) {
      cy.get(LoginObjects.enter_email).type(email);
    }

    static clickRecoveryButton() {
      cy.get(LoginObjects.recover_button).click();
    }
  static notFoundMessage() {
      cy.get(LoginObjects.not_found_message_result).should(
        "contain",
        "Email not found."
    );
  }
  static forgotSuccessfulSendMessage() {
    cy.get(LoginObjects.forget_successful_send_result).should(
      "contain",
      "Email with instructions has been sent to you."
    );
  }
  
  static invalidCredentialMessage() {
    cy.get(LoginObjects.invalid_credential_message_1).should(
      "contain",
      "Login was unsuccessful. Please correct the errors and try again."
    );
    cy.get(LoginObjects.invalid_credential_message_2).should(
      "contain",
      "The credentials provided are incorrect"
    );
  }
}

export default Login;
