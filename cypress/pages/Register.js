import RegisterObjects from '../fixtures/PageObjects/Register.json'


class Register {

    static clickRegisterLink() {
         cy.get(RegisterObjects.register_link).click();
    }

    static enterDetails(fnName, lName, email, password, conPassword) {
       
        cy.get(RegisterObjects.click_radio).first().check();
        cy.get(RegisterObjects.enter_firstname).type(fnName);
        cy.get(RegisterObjects.enter_lastname).type(lName);
        cy.get(RegisterObjects.enter_email).type(email);
        cy.get(RegisterObjects.enter_password).type(password);
        cy.get(RegisterObjects.enter_confirm_password).type(conPassword);
        
    }

    static clickRegisterButton(result) {
        cy.get(RegisterObjects.click_register_button).click();
        cy.contains(result).should("exist");
    }
}

export default Register;