

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suite for Dropdown', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        navigateTo.Tables_Data('Smart Table')
        
    })
   
    
    it("Web Tables" ,()=>{

/*
        cy.get('tbody').then(tablebody => {
        cy.wrap(tablebody).contains('tr','Larry').then(tablerow =>{

            cy.wrap(tablerow).find(".nb-edit").click()
            // clear method will clear the field value
            cy.wrap(tablerow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tablerow).find('.nb-checkmark').click()

            cy.wrap(tablerow).find('td').eq(6).should('contain','25')


            

        })

        })
        */
  
        // adding a row
        cy.get('thead').then(tablehead =>{

            cy.wrap(tablehead).find('.ng2-smart-actions-title').click()
            cy.wrap(tablehead).find('tr').then(newrow =>{

                cy.wrap(newrow).eq(2).then(singlerow =>{
    

                    cy.wrap(singlerow).find('td').eq(1).type('1')
                    cy.wrap(singlerow).find('td').eq(2).type('Shah Alam')
                    cy.wrap(singlerow).find('td').eq(3).type('Tasin')
                    cy.wrap(singlerow).find('td').eq(4).type('SAT')
                    cy.wrap(singlerow).find('td').eq(5).type('123@gmail.com')
                    cy.wrap(singlerow).find('td').eq(6).type('23')
                    cy.wrap(singlerow).find('.nb-checkmark').click()


                })

            })
        })

        cy.get('tbody').then(tablebody => {
            cy.wrap(tablebody).contains('tr','Shah Alam').then(tablerow =>{
    
    
                cy.wrap(tablerow).find('td').eq(6).should('contain','23')
    
    
                
    
            })
    
            })


            // Table Search

            const agearr = [30,40,20]

           cy.wrap(agearr).each(agevalue =>{

                cy.get('thead [placeholder="Age"]').clear().type(agevalue);

                cy.wait(500)
    
                cy.get('tbody tr').each(newrow =>{
    
               cy.wrap(newrow).find('td').eq(6).should('contain',agevalue)
              

            })


            })


    

       
    })
           

  
})