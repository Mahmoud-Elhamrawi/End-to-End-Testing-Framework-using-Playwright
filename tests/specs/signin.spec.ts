    import { test ,expect } from "@playwright/test";
      import inValidUserData from "../../TestData/inavlidLoginTestData";
      import validloginTestData from "../../TestData/validloginTestData";
      import { PoManager } from "../pages/PoManager";

 

    let poManager:PoManager;

    //Hooks
    test.beforeEach('@task',async({page})=>{
        poManager = new PoManager(page);
        await poManager.getLoginPage().open();
    });

    test.afterEach('@task',async({page},testinfo)=>{
        console.log(`Test completed: ${test}`);
    });



//Tests
test.describe('Login Functionality Tests @task',()=>{
   
  test(`Validate login with ${validloginTestData.type}`,async({page})=>{
          await poManager.getLoginPage().login(validloginTestData.username , validloginTestData.password);
          await poManager.getHomePage().validateHomePageUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
          await poManager.getHomePage().validateProfilePictureVisible();
        });
 
inValidUserData.forEach( ({username , password , type}) =>{
 
      test(`inValid login for ${type} `,async({page})=>{
          await poManager.getLoginPage().login(username , password);
          await poManager.getLoginPage().validateInvalidLoginMessage();
     });
});




});




