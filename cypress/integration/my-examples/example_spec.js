describe('My First Test', function () {
    it('The truth is that the true is always true', function () {
        expect(true).to.equal(true);
    });

    it('Gets, types and asserts', function () {
        cy.visit('https://example.cypress.io');

        cy.contains('type').click();

        cy.url().should('include', '/commands/actions');

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    })
})