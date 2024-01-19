

import {navigateTo} from '../support/PageObject/NavigationPageObject'
import {formobj} from '../support/PageObject/FormActionMethods'
import{datepickerobj} from '../support/PageObject/Datepickerclass'
describe("This is Page Object For Navigation Page" , ()=>{


    beforeEach('execute before every functoion' , ()=>
    {

        cy.HomePageCommand()
    }
    )

    it('Navigation actions ',()=>{

       navigateTo.Layout('Stepper')
       navigateTo.Forms('Form Layouts')
       navigateTo.Modal_Overlays('Toastr')
       navigateTo.Extra_Component('Calendar')
       navigateTo.Tables_Data('Smart Table')
       navigateTo.Auth('Login')



    })

    it.only('Fillup Basic  form & choose date ' , ()=>{

        navigateTo.Forms('Form Layouts')
        formobj.formfillup('shah@gmail.com','1234@1234')

        navigateTo.Forms('Datepicker')
        datepickerobj.PickaDate('Feb',29)


    })





})