
describe("Products tests", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").should('exist').click().should('not.exist');
        cy.get(".product_label").should("have.text", "Products").and("exist");
        cy.wait(2000);
    });

    it("Purchase t-shirt", () => {
        cy.get("div.inventory_item:nth-child(3) button").click().should("have.text", "REMOVE"); // PSEUDOCLASS
        cy.get("svg[data-icon='shopping-cart']").click();
        cy.get(".checkout_button").click();
        cy.get("#first-name").type("Alejandro");
        cy.get("#last-name").type("Gutierrez");
        cy.get("#postal-code").type("85000");
        cy.get(".cart_button").click();
        cy.get(".cart_button").click();
        cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
        cy.get(".complete-text").should("have.prop", "outerText", "Your order has been dispatched, and will arrive just as fast as the pony can get there!").and("have.prop", "tagName", "DIV")
        cy.get(".pony_express").should("exist").and("have.attr", "src", "img/pony-express.png");
    });

});