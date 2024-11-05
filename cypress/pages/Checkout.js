
import CheckoutObject from "../fixtures/PageObjects/Checkout.json"

class Checkout {
  // for registerd user only
  static billingAddress() {
    cy.get(CheckoutObject.continue_button_billing_address).click();
  }
  static shippingAddress() {
    cy.get(CheckoutObject.continue_button_shipping_address).click();
  }
  static shippingMethod() {
    cy.get(CheckoutObject.select_shipping_method).click();
    cy.get(CheckoutObject.continue_button_shipping_method).click();
  }

  static paymentMethod() {
    cy.get(CheckoutObject.select_cod_button).click();
    cy.get(CheckoutObject.continue_button_payment_method).click();
  }
  static paymentInforamtion() {
    cy.get(CheckoutObject.continue_button_payment_information).click();
  }
  static orderConfirm() {
      cy.get(CheckoutObject.continue_button_order_confirm).click();
      cy.contains("Your order has been successfully processed!").should("exist");
  }
}

export default Checkout;