import Login    from "../../../pages/Login";
import ATC from "../../../pages/ATC";
import PDP from "../../../pages/PDP";
import Checkout from "../../../pages/Checkout";

let email = "test-ahmed@yopmail.com";
let password = "12345678";
let notification = "The product has been added to your shopping cart";

describe("test suite for e2e", () => {

    beforeEach("visit url", () => {
      cy.visit("https://demowebshop.tricentis.com/");
    });

    it.only("e2e flow login user, with COD", () => {
        Login.clickLoginLink();
        Login.enterCredentials(email, password);
        Login.clickLoginButton();
        PDP.selectItem();
        ATC.clickCartButton(notification);
        ATC.goToCheckoutPage();
        Checkout.billingAddress();
        Checkout.shippingAddress();
        Checkout.shippingMethod();
        Checkout.paymentMethod();
        Checkout.paymentInforamtion();
        Checkout.orderConfirm();
    })
    
})