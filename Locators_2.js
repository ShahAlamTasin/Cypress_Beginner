
// this will provide autosuggestion by vscode for cypress function
/// <reference  types= "cypress" />  



// Locators for finding element
describe("This is first test suit", () => {

    beforeEach("Steps before each test case", () => {

        // enter the Url here .
        // this is run on localhost thats why configuration file have the Url -> enter only /
        cy.visit('/')

        // By Text

       //cy.contains("Forms").click()
       // cy.contains("Form Layouts").click();
    })

    it("This is first test case inside suit 1 ", () => {


        // by tagname 
        cy.get("input")
        // By Id  -> enter # before the id name

        cy.get("#inputEmail1")

        //By className  -> can work with a single class name among multiples
        // enter . before the classname

        cy.get('.input-full-width')

        //By Attribute name

        cy.get('[placeholder]')

        // By Attribute name and value 

        cy.get('[placeholder ="Email"]')

        // by class value  -> have to provide full class name -> observe 3 class
        cy.get('[class = "input-full-width size-medium shape-rectangle"]')

        //by tag name and attribute value
        cy.get('input[placeholder="Email"]')

        // By Multiples attributes
        cy.get('[placeholder ="Email"][type="email"]')

        // By  tag name , Attribute value , ID & Class name 

        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // Most recommanded way -> Create my own attribute  -> Go to html and create my own attribute for Test 
        cy.get('[data-cy="imputEmail1"]')
    })


    it("This is second test case", () => {


        // When an element cant have unique key or attribute  to grab 

        // Added custom attribute

        cy.get('[data-cy="SubmitButton"]')

        //Cypress contains method can accept multiple parameter
        // Two Button contains same text but defined by status attribute 

        cy.contains('[status="primary"]', "Sign in")

    })
    // Find Element by Dom / parent Child Relation 
    it("This is third Test Case", () => {

        // find method is useless without a parent method -> helps to find a child -> within find give locator 
        // should is a assertion -> ensure the element have the text 
        //Imagine  email has unique properties 
        cy.get('#inputEmail3').parents('form').find('button').should('contain', 'Sign in')
            .parents('form').find('nb-checkbox').should('contain', 'Remember me').click();


        // Imagibe email is not the unique identifier 

        //Contains method  -> Second parameter can be parent Tag

        cy.contains('nb-card', 'Horizontal form').find('#inputEmail3')
        cy.contains('nb-card-header', 'Horizontal form').parent('nb-card').find('#inputEmail3')


    })

    //it.only will run the current test only


})
