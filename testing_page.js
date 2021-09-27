describe('Full_Register', function() {

    it('Check correct page register and login', function() {
   
        cy.viewport(885, 722)
         
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')
     
        //redirect to login page to check link
        cy.get('#signup-app > div > div.signup-input-wrapper > h4 > a').click()
        cy.wait(500)
     
        //check that is correct login page and url
        cy.get('#login-form > h1').should('have.text', 'Log in to Manatal')
        cy.url().should('be.equal', 'https://jb-app-frontend-staging.herokuapp.com/login')
     
        //click sign up button
        cy.get('#login-form > div.text-xs-center.signup-url-link.fs-14 > a').click()
     
        //check that is correct sign up page and url
        cy.get('#signup-app > div > h1').should('have.text', 'Start Your Free Trial')
        cy.url().should('be.equal', 'https://jb-app-frontend-staging.herokuapp.com/signup/')
    })
    })