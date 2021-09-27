class EmailGenerator {

    static id = 1;
    static generate(baseEmail) {
      const uniqueId = `+${this.id++}`;  
      return baseEmail.replace('@', `${uniqueId}@`); 
    }
  }
  
  Cypress.Commands.add('generateEmail', (baseEmail) => {
    return EmailGenerator.generate(baseEmail)
  })
  
  it('generates a unique email', () => {
    console.log(EmailGenerator.generate('hendra.wijaya@candidate.manatal.com'))   // test+a1@gmail.com
  })
  
  it('puts unique emails into the input', () => {

    cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

    cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #company_email_address').click()
  
    cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #company_email_address')
      .type(EmailGenerator.generate('hendra.wijaya@candidate.manatal.com'))        // test+a4@gmail.com
  
    cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #confirm_company_email_address').click()

    cy.get('.signup-form > .signup-input-wrapper > #account_signup > .signup-input-field > #confirm_company_email_address')
      .type(EmailGenerator.generate('hendra.wijaya@candidate.manatal.com'))        // test+a5@gmail.com
})