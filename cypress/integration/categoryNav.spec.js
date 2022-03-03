describe('categoryNav', () => {
  it('category navbar test', () => {
    const categoryName = [
      { name: '땡철이', path: '/categories/1' },
      { name: '카페', path: '/categories/67' },
      { name: '편의점,마트', path: '/categories/62' },
      { name: '빵,아이스크림', path: '/categories/60' },
      { name: '피자,햄버거,치킨', path: '/categories/61' },
      { name: '문화,게임,영화', path: '/categories/65' },
      { name: '외식,분식', path: '/categories/129' },
      { name: '백화점,주유,뷰티', path: '/categories/69' },
      { name: '휴대폰 데이터', path: '/categories/128' },
    ];
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="/categories/61"]').click();
    categoryName.forEach(element => {
      cy.get('button').contains(`${element.name}`).click();
      cy.location('pathname').should('equal', `${element.path}`);
    });
  });
});
