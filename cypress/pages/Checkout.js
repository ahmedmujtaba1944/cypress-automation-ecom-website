import CheckoutObject from "../fixtures/PageObjects/Checkout.json";

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

  static paymentMethodCard() {
    cy.get(CheckoutObject.select_card_button).click();
    cy.get(CheckoutObject.continue_button_payment_method).click();
  }
  static paymentInforamtion() {
    cy.get(CheckoutObject.continue_button_payment_information).click();
  }
  static orderConfirm() {
    cy.get(CheckoutObject.continue_button_order_confirm).click();
    cy.contains("Your order has been successfully processed!").should("exist");
  }
  static EnterCardDetails(name, cardNumber, code) {
    cy.get(CheckoutObject.enter_card_holder_name).type(name);
    cy.get(CheckoutObject.enter_card_number).type(cardNumber);
    cy.get(CheckoutObject.enter_card_code).type(code);
    cy.get(CheckoutObject.continue_button_payment_information).click();
  }
}

export default Checkout;
