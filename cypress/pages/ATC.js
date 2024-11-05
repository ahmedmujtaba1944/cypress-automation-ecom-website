import AtcObject from "../fixtures/PageObjects/ATC.json"

class ATC{
    static clickCartButton(notification) {
        cy.get(AtcObject.click_cart_button).click();
        cy.contains(notification).should('exist');
    }
    
}

export default ATC;