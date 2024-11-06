import ATC from "../../../pages/ATC";
import PDP from "../../../pages/PDP";
import PLP from "../../../pages/PLP"
import Search from "../../../pages/Search";


let notification = "The product has been added to your shopping cart";

describe("test suite for add to cart page", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  
  //test case 1
  it("test case 1: Verify adding a product to the cart from the product listing page", () => {
  
    PLP.clickNabar4();
    PLP.verifyPageTitle("Apparel & Shoes");
    PDP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification)

  });

  //test case 2
  it("Verify that the cart displays the correct product count afteradding multiple items", () => {

    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    cy.wait(2000)
    ATC.verifyCartQty(1);
    // ATC.clickCartIcon();


  
  });




  it("Verify that the remove item from the cart", () => {

    Search.searchProductApparel();
    PLP.clickFirstItem();
    ATC.clickCartButton();
    ATC.verifyNotification(notification);
    ATC.clickCartIcon();
    ATC.clickCartRemove();
    ATC.clickCartUpdateButton();
    ATC.verifyCartEmpty();


    // Your Shopping Cart is empty!
  });






  it("Verify updating item quantity in the cart", () => {
    
  });





  it("Verify emptying the cart removes all items", () => {
 
    
  });
});
