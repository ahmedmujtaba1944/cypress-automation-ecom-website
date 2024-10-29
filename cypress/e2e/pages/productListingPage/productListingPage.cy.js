describe("test suite for product listing page", () => {
  beforeEach("visit url", () => {
    cy.visit("https://demowebshop.tricentis.com/");
  });
    
  it("test case 1: Verify default sorting by position", () => {
    cy.get(".top-menu > :nth-child(4) > a").click();
      cy.get("h1").should("contain", "Apparel & Shoes");
    cy.get("#products-orderby").should("contain", "Position");
  });
    
  it("test case 2:Verify sorting by price (low to high)", () => {
    cy.get(".top-menu > :nth-child(4) > a").click();
    cy.get("h1").should("contain", "Apparel & Shoes");
    cy.get("#products-orderby").select("Price: Low to High");
  });
    it("Verify sorting by price (low to high)", () => {
      cy.get(".top-menu > :nth-child(4) > a").click();
      cy.get("h1").should("contain", "Apparel & Shoes");

      cy.get("#products-orderby").select("Price: Low to High");

      cy.get(".product-item").then(($products) => {
        const prices = [];
        $products.each((index, product) => {
          const priceText = Cypress.$(product).find(".price").text();
          const price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
          prices.push(price);
        });

        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices);
      });
    });


    it.only("Verify sorting by name (A to Z)", () => {
      cy.get(".top-menu > :nth-child(4) > a").click();
      cy.get("h1").should("contain", "Apparel & Shoes");

      cy.get("#products-orderby").select("Name: A to Z");

      cy.get(".product-item").then(($products) => {
        const names = [];
        $products.each((index, product) => {
          const nameText = Cypress.$(product).find(".product-title").text();
          names.push(nameText);
        });

        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        expect(names).to.deep.equal(sortedNames);
      });
    });


});
