

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suite for Dropdown', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        
        
    })
   
    it("Test Case -> Dropdown & List",()=>{


        

        //     cy.contains('nb-option','Dark').click()
            
        //     cy.get('nb-select button').should('contain','Dark')
       
        //   cy.get('nav').should('have.css','background-color','rgb(34, 43, 69)')
       
               cy.get('nb-select button').then(dropdown =>{
       
                   const colorlist = {
                       "Light" : "rgb(255, 255, 255)",
                       "Dark" : "rgb(34, 43, 69)",
                       "Cosmic" : "rgb(50, 50, 89)",
                       "Corporate" : "rgb(255, 255, 255)"
                   }
       
                   cy.wrap(dropdown).click()
       // for each loop
                   cy.get('.options-list nb-option').each(itr => {                               
       
                           const colortext = itr.text().trim()
       
                           cy.wrap(itr).click()
       
                           cy.wrap(dropdown).should('contain',colortext)
                           cy.get('nb-layout-header nav').should('have.css','background-color',colorlist[colortext])
                           cy.wrap(dropdown).click()
       
                       }) 
                  
                   
       
       
               })
       
               //cy.select only work when the element is using select tag -> can get value by text and  attribute
       
           })
           

  
})