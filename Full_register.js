context('Register', () => {
    beforeEach(() => {
      cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')
    })

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
    it('Check Error message show and disappear properly', function() {

        //Show all error message for required field
       cy.get('#signup-app > .signup-form > .signup-input-wrapper > #account_signup > .signup-material-button-contained').click()
    
       //error message field validation for name required
       cy.get('#account_signup > span:nth-child(2)').should('have.text', 'The name field is required')

       //error message field validation for organization name required
       cy.get('#account_signup > span:nth-child(4)').should('have.text', 'The organization name field is required')

       //error message field validation for email address required
       cy.get('#account_signup > span:nth-child(7)').should('have.text', 'The company email address field is required')

       //error message field validation for confirm email address required
       cy.get('#account_signup > span:nth-child(9)').should('have.text', 'The confirm company email address field is required')

       //error message field validation for password required
       cy.get('#account_signup > span:nth-child(11)').should('have.text', 'The password field is required')

       cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #name').click()
      
         //type name
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #name').type('Hendra')
  
         //check name error message is not exist
         cy.contains('The name field is required').should('not.exist')
      
         //click field organization
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #organization_name').click()
  
         //type organization
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #organization_name').type('Tripnize')
  
         //check organization error message is not exist
         cy.contains('The organization name field is required').should('not.exist')
      
         //click radio button choose company
         cy.get('#account_signup > .signup-input-field > div > div > #company').type('company')
      
         //click field company email address
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #company_email_address').click()
      
         //type company email address
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #company_email_address').type('hendra.wijaya+14@candidate.manatal.com')
    
         //check company email address error message is not exist
         cy.contains('The company email address field is required').should('not.exist')
  
         //click confirm company email address
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #confirm_company_email_address').click()
  
         //type different confirm company email address
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #confirm_company_email_address').type('hendra.wijaya+11@candidate.manatal.com')

         //check email not match
         cy.get('#account_signup > span:nth-child(6)').should('have.text', 'The confirm company email address confirmation does not match')
      
         //clear text on confiem field
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #confirm_company_email_address').clear()

         //check confirm email address error message is not exist
         cy.contains('The confirm company email address confirmation does not match').should('not.exist')

         //type same confirm company email address
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #confirm_company_email_address').type('hendra.wijaya+14@candidate.manatal.com')

         //check confirm company email address error message is not exist
         cy.contains('The confirm company email address field is required').should('not.exist')
  
         //click field password
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #password').click()
  
         //type password
         cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #password').type('test123')
  
         //check password error message is not exist
         cy.contains('The password field is required').should('not.exist')
  
         //Click dropdownlist
         cy.get('div > .pa-0 > .vti__dropdown > .vti__selection > .vti__dropdown-arrow').click()
      
         //choose country phone number
         cy.get('.pa-0 > .vti__dropdown > .vti__dropdown-list > .vti__dropdown-item:nth-child(99) > strong').click()
      
         //click field phone number
         cy.get('#account_signup > .signup-input-field > div > .pa-0 > .vti__input').click()
      
         //type Incorrect phone number
         cy.get('#account_signup > .signup-input-field > div > .pa-0 > .vti__input').type('12345')
  
         //Error message for phone number is invalid
         cy.get('#account_signup > span:nth-child(8)').should('have.text', 'Enter a valid phone number')
  
         //type phone number
         cy.get('#account_signup > .signup-input-field > div > .pa-0 > .vti__input').type('67')
  
         //check phone number error message is not exist
         //cy.contains('Enter a valid phone number').should('not.exist')
      
         //click agree checkbox
         cy.get('#signup-app > .signup-form > .signup-input-wrapper > #account_signup > #agree').click()
  
         //check checkbox has been checked
         cy.get('#agree').check().should('be.checked').and('have.class','mt-4')
  
         //check checkbox error message is not exist
         cy.contains('The agree field is required').should('not.exist')

         //click signup
         cy.get('#signup-app > .signup-form > .signup-input-wrapper > #account_signup > .signup-material-button-contained').click()

        //check same email with registration
         cy.get('#signup-app > div.signup-form > div:nth-child(3) > h4.text-lowercase.d-block.mx-auto.mt-2.text-xs-center.mb-5.black--text > b').should('have.text', 'hendra.wijaya+14@candidate.manatal.com')
    })
    })
})
