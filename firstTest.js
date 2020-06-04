describe('My First Test', () => {
    it('Verify tile shows correctly', () => {
      cy.visit('http://kiemthutudong.com');
      cy.title().should('eq','Kiểm Thử Tự Động | Đọc xong vọc liền');
    })
    it('Verify tile shows correctly 1', () => {
      cy.visit('http://kiemthutudong.com');
      cy.title().should('eq','Kiểm Thử Tự Động | Đọc xong');
    })

  })