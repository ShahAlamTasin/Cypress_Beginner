
/// <reference types = "cypress" />


// By describe and it user can add details about the test suit and test case



describe ("This is first test suit", ()=> {

 it("This is first test case inside suit 1 " , ()=> {

 })
 it("This is Second test case inside suit 1 " , ()=> {

 })
})

// A single file can contain multiple suit or description
// Description can be nested 
// A suit (description) can contain multiple test case (it)

/*

describe("This is second test suit", ()=>{

    describe("This is nested test suit", ()=> {

        beforeEach("This is for nested descriobe" , ()=>{
            // enter repetative code here -> need to run before each test 
        })

        it("This is firs test under nested test suit", ()=>{

        })

    })
})

*/ 
