import PdfObject from '../fixtures/PageObjects/PDP.json'


  
class PDP {
  static clickFirstItem() {
    cy.get(PdfObject.click_first_item).click();
  }

    static verifyAvailability(value) {
      cy.get(PdfObject.verify_avaliblity_value).should('contain',value);
    }
    static verifyImage() {
        cy.get(PdfObject.verify_image).should("be.visible");
    }
    static verifyProductName(pname) {
     cy.get(PdfObject.verify_product_name).should('contain',pname);
    }
    static verifyPrice(price) {
        cy.get(PdfObject.verify_price).should("contain", price);
    }
}


export default PDP;