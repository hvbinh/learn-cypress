describe('login test cases', () => {
    it('Verify log in function works correctly', () => {
        cy.visit('https://kiemthutudong.com/blog/')
        cy.contains('Log in').click()
        cy.get('#user_login').type('binhha')
        cy.get('#user_pass').type('12345678x@X')
        cy.get('#wp-submit').click()

    })
    it('Verify that update profile successfully',()=>
    {
        cy.get('[for=admin_color_light]').click()
        cy.get('#first_name').type('Tony')
        cy.get('#last_name').type('Ferguson')
        cy.get('#url').type('abc.com')
        cy.get('#description').type('my description')
        cy.get('#submit').click()

    })


  })