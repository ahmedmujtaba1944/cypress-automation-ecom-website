import AtcObject from "../fixtures/PageObjects/ATC.json"

class ATC{
    static clickCartButton() {
        cy.get(AtcObject.click_cart_button).click();
        // cy.contains("Add to cart").click();
        
    }
    static verifyNotification(notification) {
        cy.contains(notification).should("exist");
    }

    static goToCheckoutPage()
    {
        cy.get(AtcObject.click_cart_icon).click();
        cy.get(AtcObject.click_terms_service).click();
        cy.get(AtcObject.click_checkout_button).click();
    }
    static verifyNoCartButton() {
        cy.contains("Add to cart").should("not.exist")
    }
}

export default ATC;