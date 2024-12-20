import Login from "../../pages/Login";
import ATC from "../../pages/ATC";
import PDP from "../../pages/PDP";
import PLP from "../../pages/PLP";
import Checkout from "../../pages/Checkout";
import Search from "../../pages/Search";

let email = "test-ahmed@yopmail.com";
let password = "12345678";
let notification = "The product has been added to your shopping cart";

describe("test suite for checkout page", () => {
  beforeEach("visit the url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });
  it("test case 1:checkout login user, with COD", () => {
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

  it("test case 2: checkout login user, with payment method", () => {
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

  it("test case 3: check out without login using COD", () => {
    cy.get(".top-menu > :nth-child(4) > a").click();
    cy.get(
      ":nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
    cy.get("#add-to-cart-button-5").click();
    cy.contains("The product has been added to your shopping cart").should(
      "exist"
    );
    cy.get("#topcartlink > .ico-cart").trigger("mouseover");
    cy.get(".cart-button").should("be.visible");
    cy.get(".cart-button").click();
    cy.get("#termsofservice").check();
    cy.get("#checkout").click();
    cy.contains("Checkout as a guest or register").should("exist");

    cy.get(".checkout-as-guest-button").click();
    cy.get("#BillingNewAddress_FirstName").type("test");
    cy.get("#BillingNewAddress_LastName").type("ch");
    cy.get("#BillingNewAddress_Email").type("test-ahmed@yopmail.com");

    // cy.get('select').select('Afghanistan');
    // cy.get("select").select("Afghanistan").should("have.value", "86");
    cy.get("#BillingNewAddress_CountryId").select("Afghanistan");

    cy.get("#BillingNewAddress_City").type("test city");
    cy.get("#BillingNewAddress_Address1").type("test address 1");
    cy.get("#BillingNewAddress_ZipPostalCode").type("2323");
    cy.get("#BillingNewAddress_PhoneNumber").type("123456789");

    cy.get("#billing-buttons-container > .button-1").click();
    cy.get("#shipping-buttons-container > .button-1").click();
    cy.get('[type="radio"]').first().check();
    cy.get("#shipping-method-buttons-container > .button-1").click();
    cy.get('[type="radio"]').first().check();
    cy.get("#payment-method-buttons-container > .button-1").click();

    // payment page
    cy.contains("You will pay by COD").should("exist");
    cy.get("#payment-info-buttons-container > .button-1").click();

    // confirmation page
    cy.get("#confirm-order-buttons-container > .button-1").click();

    // thanku page
    cy.contains("Thank you").should("exist");
    cy.contains("Your order has been successfully processed!").should("exist");
  });
});
