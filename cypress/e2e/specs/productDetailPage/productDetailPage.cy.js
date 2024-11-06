import Search from "../../../pages/Search";
import PLP from "../../../pages/PLP";
import PDP from '../../../pages/PDP'
import ATC from '../../../pages/ATC'

let notification = "The product has been added to your shopping cart";

describe("test suite for product detail page", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });

  it("test case 1: Verify PDP loads correctly for each product type", () => {

    PLP.clickNabar4();
    PLP.verifyPageTitle("Apparel & Shoes");
    PDP.clickFirstItem(); 
    PDP.verifyAvailability("In stock");


  });

  it("test case 2: Verify product title,image,price,description,availability displays correctly", () => {

     PLP.clickNabar4();
     PLP.verifyPageTitle("Apparel & Shoes");
    PDP.clickFirstItem(); 
    PDP.verifyImage();
    PDP.verifyPrice("11.00");
    PDP.verifyAvailability("In stock");
    PDP.verifyProductName("50's Rockabilly Polka Dot Top JR Plus Size");

  });

  it("test case 3: Verify 'Add to Cart' button functionality", () => {

   PLP.clickNabar4();
   PLP.verifyPageTitle("Apparel & Shoes");
   PDP.clickFirstItem();
   ATC.clickCartButton();
   ATC.verifyNotification(notification);

    
  });

  it("test case 4: Verify default sorting by position", () => {
    PLP.clickNabar4();
    PLP.verifyPageTitle("Apparel & Shoes");
    PLP.verifySortValue("Position");
   PDP.clickFirstItem();
   PDP.verifyImage();
   PDP.verifyPrice("11.00");
   PDP.verifyAvailability("In stock");
   PDP.verifyProductName("50's Rockabilly Polka Dot Top JR Plus Size");
  });

  it.only("test  case 5: Verify no ATC button when adding an out-of-stock item to the cart", () => {

    PLP.clickNabar4();
    PLP.verifyPageTitle("Apparel & Shoes");
    PLP.clickItemWithNoAddToCart();
    PDP.verifyAvailability("Out of stock");
    ATC.verifyNoCartButton();
    
  });
});
