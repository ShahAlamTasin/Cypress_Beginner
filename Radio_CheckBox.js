

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suite for RadioButton & CheckBox', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        navigateTo.Forms('Form Layouts')
        
    })
    it("Test Case -> Radio Button",()=> {


        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(Radiobuttons =>{
        
            //be.checked -> radio button is selected
            
            //not.be.checked -> radio button is not  selected
        
            cy.wrap(Radiobuttons).eq(0).check({force:true}).should('be.checked')
            cy.wrap(Radiobuttons).eq(1).check({force:true}).should('be.checked')
            cy.wrap(Radiobuttons).eq(0).should('not.be.checked')
            cy.wrap(Radiobuttons).eq(2).should('be.disabled')
        
            // check method only work with input type elements -> checkbox , Radio Button
        })
        
        
        
        
        
            })
        
            it("Test Case -> CheckBox",()=>{
        
                
                navigateTo.Modal_Overlays('Toastr')
        
              
        
                //check method can only check the checkbox, it cant uncheck it
        
                //eq -> index 
                cy.get('[type="checkbox"]').eq(0).check({force:true})
        
                cy.get('[type="checkbox"]').eq(1).check({force:true})
        
                cy.get('[type="checkbox"]').eq(0).click({force:true})
        
        
            })

  
})