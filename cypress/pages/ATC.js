import AtcObject from "../fixtures/PageObjects/ATC.json"

class ATC{
    static clickCartButton() {
        cy.get(AtcObject.click_cart_button).click();
        // cy.contains("Add to cart").click();
        
    }
    static verifyNotification(notification) {
        cy.contains(notification).should("exist");
        // cy.get(AtcObject.successful_content).should('contain', notification);
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
    static clickCartIcon() {
        cy.get(AtcObject.click_cart_icon).click();
    }
    static clickCartRemove() {
        cy.get(AtcObject.click_cart_remove_check).click();
    }

    static clickCartUpdateButton() {
        cy.get(AtcObject.click_checkout_button).click();
    }

    static clickTermServiceButton() {
         cy.get(AtcObject.click_terms_service).click();
    }

    static verifyCartEmpty() {
        cy.get(AtcObject.empty_cart_message).should('be.visible');
    }

    static verifyCartQty(q) {
        cy.get(AtcObject.cart_quantity).should('contain', q);
    }
}


export default ATC;