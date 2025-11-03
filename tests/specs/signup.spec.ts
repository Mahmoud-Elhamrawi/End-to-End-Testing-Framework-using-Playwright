    import { test ,expect } from "@playwright/test";
      import ValidSignUpTestData from "../../TestData/ValidSignUpTestData"; 
      import InValid_SignUpTestData from "../../TestData/InValid_SignUpTestData";
      import { PoManager } from "../Pages/PoManager";

 

    let poManager:PoManager;

    //Hooks
    test.beforeEach('@task',async({page})=>{
        poManager = new PoManager(page);
          await poManager.getRegisterPage().openHomePage();
    });

    test.afterEach('@task',async({page},testinfo)=>{
        console.log(`Test completed: ${test}`);
    });


//Tests
test.describe('Registration Functionality TC @task',()=>{
   
  test(`Validate  successfully signUp with ${ValidSignUpTestData.type}`,async()=>{
      await poManager.getRegisterPage().openSignUpForm();
      await poManager.getRegisterPage()
      .signUpSteps(ValidSignUpTestData.firstname,ValidSignUpTestData.lastname,ValidSignUpTestData.address,ValidSignUpTestData.city,ValidSignUpTestData.state,ValidSignUpTestData.zipCode,ValidSignUpTestData.phone,ValidSignUpTestData.ssn,ValidSignUpTestData.username+"@"+Math.random().toString(36).substring(2, 8),ValidSignUpTestData.password   );
 await poManager.getRegisterPage().validateSignUpSuccessMessage();

  });
 
InValid_SignUpTestData.forEach( ({firstname , lastname ,address, city, state ,zipCode ,phone ,ssn ,username ,password ,type}, index) =>{

      test(`inValid SignUp #${index + 1} with ${type}`, async () => {
          await poManager.getRegisterPage().openSignUpForm();
          await poManager.getRegisterPage()
          .signUpSteps(firstname,lastname,address,city,state,zipCode,phone,ssn,username,password);
         await poManager.getRegisterPage().validateSignUpErrorMessage();
      });
});




});




