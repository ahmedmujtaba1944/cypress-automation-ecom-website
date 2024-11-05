import AtcObject from "../fixtures/PageObjects/ATC.json"

class ATC{
    static clickCartButton(notification) {
        cy.get(AtcObject.click_cart_button).click();
        cy.contains(notification).should('exist');
    }

    static goToCheckoutPage()
    {
        cy.get(AtcObject.click_cart_icon).click();
        cy.get(AtcObject.click_terms_service).click();
        cy.get(AtcObject.click_checkout_button).click();
    }
    
}

export default ATC;