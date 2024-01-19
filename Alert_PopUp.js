

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suite for Alert & popUp', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        
        
    })

        
    it("This is alert & Dialouge box", () =>{


        navigateTo.Modal_Overlays('Tooltip')
      

       cy.get('nb-card-body').contains('Default').click()

       cy.get('nb-tooltip').should('contain', 'This is a tooltip')

   })

   it("this is dialouge " , ()=>{


      
       navigateTo.Modal_Overlays('Dialog')

       cy.get('button').contains('Open Dialog with component').click()

       cy.get('nb-card-body').should('contain','Lorem ipsum')

   })


   it.only("browser alert or popup ", ()=>{

             cy.contains("Tables & Data").click();
             navigateTo.Tables_Data('Smart Table')
    

        const stb = cy.stub()

        //window.alert or window.confirm 

        cy.on("window:confirm",stb)

        cy.get('tbody tr').eq(0).find('.nb-trash').click().then(()=>{

           expect(stb.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })

        // if cancel the button 

        cy.get('tbody tr').eq(0).find('.nb-trash').click()
        cy.on('window:confirm',()=>false)
   })
     

  
})