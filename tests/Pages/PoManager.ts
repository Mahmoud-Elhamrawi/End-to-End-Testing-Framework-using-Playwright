import { type Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePages";
import { RegisterPage } from "../Pages/RegisterPage";




export class PoManager{
   private readonly page : Page;
   private readonly loginPage:LoginPage;
   private readonly homePage:HomePage;
   private readonly registerPage:RegisterPage;
 

  constructor(page:Page){
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.registerPage = new RegisterPage(page);
  
  }
 
  getLoginPage(){
    return this.loginPage;
  }

  getHomePage(){
    return this.homePage;
  } 

  getRegisterPage(){
    return this.registerPage;
  } 











}