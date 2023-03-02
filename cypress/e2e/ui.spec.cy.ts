describe('EHS Application', () => {

    beforeEach(() => {
        cy.visit('../Automationassignment/Application/EHS.html');
    });

    it('should display all the available products', () => {
        const actualResult = [];

        cy.get('#ListAllItemsButton').click();
        cy.get('table tbody tr td:nth-child(1)').each(($el) => actualResult.push($el.text()));
        cy.fixture('products').should('deep.equal', actualResult);
    });

    it('should display detailed information about a specific product', () => {
        const actualResult = [];

        cy.basicOperations('STD 7')
        cy.get('table tbody tr td:nth-child(2) input').each(($el) => actualResult.push($el.val()));
        cy.fixture("STD7DetailedInfo").should('deep.equal', actualResult);
    });

    it('should search for a specific product', () => {
        cy.basicOperations('STD 7');
    });
});