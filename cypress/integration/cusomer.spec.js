describe('customer', () => {
  it('customer contact test', () => {
    cy.visit('http://localhost:3000/');
    cy.get('img[alt="seemore"]').click();

    cy.get('a')
      .contains('고객센터')
      .click()
      .url()
      .should('include', '/contacts');

    const selectMenu = ['판매', '구매'];

    cy.get('button').contains(`${selectMenu[0]}`).click();

    cy.get('img[alt="seeMore"]').each($btn => {
      return cy.wrap($btn).click();
    });

    cy.get('img[alt="seeMore"]').each($btn => {
      return cy.wrap($btn).click();
    });

    cy.get('button').contains(`${selectMenu[1]}`).click();

    cy.get('img[alt="seeMore"]').each($btn => {
      return cy.wrap($btn).click();
    });

    cy.get('img[alt="seeMore"]').each($btn => {
      return cy.wrap($btn).click();
    });
  });
});
