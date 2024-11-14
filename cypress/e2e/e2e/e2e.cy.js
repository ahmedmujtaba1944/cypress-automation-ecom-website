import Login from "../../pages/Login";
import ATC from "../../pages/ATC";
import PDP from "../../pages/PDP";
import PLP from "../../pages/PLP";
import Checkout from "../../pages/Checkout";
import Search from "../../pages/Search";

let email = "test-ahmed@yopmail.com";
let password = "12345678";
let notification = "The product has been added to your shopping cart";

describe("test suite for e2e", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  it("e2e flow login user, with COD", () => {
    Login.clickLoginLink();
    Login.enterCredentials(email, password);
    Login.clickLoginButton();
    // PDP.selectItem();
    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.clickCartIcon();
    ATC.clickTermServiceButton();
    ATC.goToCheckoutPage();
    Checkout.billingAddress();
    Checkout.shippingAddress();
    Checkout.shippingMethod();
    Checkout.paymentMethodCOD();
    Checkout.paymentInforamtion();
    Checkout.orderConfirm();
  });

  it("e2e flow login user, with payment method", () => {
    Login.clickLoginLink();
    Login.enterCredentials(email, password);
    Login.clickLoginButton();
    // PDP.selectItem();
    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000);
    ATC.clickCartIcon();
    ATC.clickTermServiceButton();
    ATC.goToCheckoutPage();
    Checkout.billingAddress();
    Checkout.shippingAddress();
    Checkout.shippingMethod();
    Checkout.paymentMethodCard();
    Checkout.EnterCardDetails("eden lane ", 5425233430109903, 786);
    Checkout.orderConfirm();
  });
});
