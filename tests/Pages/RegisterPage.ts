import {  type Page , type Locator, expect } from "@playwright/test";


export class RegisterPage{
//varibales
readonly page : Page;
readonly signUP_Link:Locator
readonly firstName_tb:Locator ;
readonly lastName_tb:Locator ;
readonly address_tb:Locator ;
readonly city_tb:Locator ;
readonly state_tb:Locator ;
readonly zipCode_tb:Locator ;
readonly phone_tb:Locator ;
readonly ssn_tb:Locator ;
readonly userName_tb:Locator;
readonly Password_tb:Locator;
readonly confirmPassword_tb:Locator ;
readonly register_btn:Locator;
readonly successMessage_lbl:Locator;
readonly errorMessage_lbl:Locator;
readonly URL:string = 'https://parabank.parasoft.com/parabank/index.html';
readonly expectedSuccessMessage:string = 'Your account was created successfully. You are now logged in.';
readonly expectedErrorMessage_existUsername:string = 'This username already exists.';
readonly expectedErrorMessage_emptyUsername:string = 'Username is required.';


//constructor
constructor(page :Page){
    this.page = page;
    this.signUP_Link = page.getByText('Register');

    this.firstName_tb = page.locator('input[name="customer.firstName"]');
    this.lastName_tb = page.locator('input[name="customer.lastName"]');
    this.address_tb = page.locator('input[name="customer.address.street"]');
    this.city_tb = page.locator('input[name="customer.address.city"]');
    this.state_tb = page.locator('input[name="customer.address.state"]');
    this.zipCode_tb = page.locator('input[name="customer.address.zipCode"]');
    this.phone_tb = page.locator('input[name="customer.phoneNumber"]');
    this.ssn_tb = page.locator('input[name="customer.ssn"]');
    this.userName_tb = page.locator('input[name="customer.username"]');
    this.Password_tb = page.locator('input[name="customer.password"]');
    this.confirmPassword_tb = page.locator('input[name="repeatedPassword"]');
    this.register_btn = page.locator('input[value="Register"]');
    this.successMessage_lbl = page.locator('#rightPanel p');
      this.errorMessage_lbl = page.locator('span[id="customer.username.errors"]');

     
}

//methods actions
async openHomePage(){
   await this.page.goto(this.URL);
}

async openSignUpForm(){
   await this.signUP_Link.click();
}

async signUpSteps(firstName:string , lastName:string , address:string , city:string , state:string , zipCode:string , phone:string , ssn:string , username:string , password:string){
    await this.firstName_tb.fill(firstName);
    await this.lastName_tb.fill(lastName);
    await this.address_tb.fill(address);
    await this.city_tb.fill(city);
    await this.state_tb.fill(state);
    await this.zipCode_tb.fill(zipCode);
    await this.phone_tb.fill(phone);
    await this.ssn_tb.fill(ssn);
    await this.userName_tb.fill(username);
    await this.Password_tb.fill(password);
    await this.confirmPassword_tb.fill(password);
    await this.register_btn.click();
}


//validations
async validateSignUpSuccessMessage(){
   await expect(this.successMessage_lbl).toContainText(this.expectedSuccessMessage);
}


async validateSignUpErrorMessage(){
   await expect(this.successMessage_lbl).toBeVisible();
}





}
