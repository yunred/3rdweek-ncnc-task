describe('main', () => {
  it('total app function test', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="/categories/62"]').click();
    cy.location('pathname').should('equal', '/categories/62');
    cy.get('p').contains('편의점,마트');
    cy.get('a[href*="/brands/61"]').click();
    cy.location('pathname').should('equal', '/brands/61');
    cy.get('a[href*="/items/1134"]').click();
    cy.location('pathname').should('equal', '/items/1134');
    cy.get('div').contains('옵션 선택하기').click();
    cy.get('p').contains('유효기간').click();
    cy.get('img[alt="seeback"]').click();
    cy.get('img[alt="seeback"]').click();
  });
});
