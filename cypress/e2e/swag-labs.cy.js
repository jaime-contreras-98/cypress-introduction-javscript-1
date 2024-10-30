import * as loginlocators from '';

describe("Sauce Demo test suite", () => {

    beforeEach(() => {
        cy.log("Starting test...");
        cy.visit("https://www.saucedemo.com/v1/");
        cy.wait(3000);
    });

    afterEach(() => {
        cy.wait(3000);
        cy.log("Ending test...");
    });

    it("This is my first cypress test - happy", () => {
        cy.location().should((loc) => {
            expect(loc.hostname).equal("www.saucedemo.com");
            expect(loc).to.be.NaN();
            expect(loc).to.have.html();
        });

        cy.wait(3000);
        cy.get("#login-button");
        cy.get().type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(".product_label").should("have.text", "Products").and("exist");
    });

    it("This is my second cypress test - sad", function () {
        cy.get("#user-name").type("automationpractice");
        cy.wait(3000);
        cy.get("#password").type("secret_sauce123123");
        cy.wait(3000);
        cy.get("#login-button").click();
        cy.wait(3000);
        cy.get("h3[data-test='error']").should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

});