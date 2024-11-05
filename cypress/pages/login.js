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
    // Verify that the user is logged in by checking the account element contains the email
    cy.get(LoginObjects.verify_login).should('contain', Email);
  }
}

export default Login;
