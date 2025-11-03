  
 import { test ,expect } from "@playwright/test";
 import validloginTestData from "../../testData/validloginTestData";
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
test.describe('Validate logout @task',()=>{


      test("Validate logout",async({page})=>{
    await poManager
            await poManager.getLoginPage().login(validloginTestData.username , validloginTestData.password);
            await poManager.getHomePage().logout();
            await page.goBack();
            await poManager.getLoginPage().validateLoginPageUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     });

});

