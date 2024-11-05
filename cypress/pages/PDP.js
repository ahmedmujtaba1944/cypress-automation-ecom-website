import PdfObject from '../fixtures/PageObjects/PDP.json'


  
class PDP{
    static selectItem() {
        cy.get(PdfObject.click_navbar).click();
        cy.get(PdfObject.click_first_item).click();
    }
}

export default PDP;