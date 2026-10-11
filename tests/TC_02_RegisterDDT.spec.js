import {test, expect} from '@playwright/test';
import { EntryPage } from '../PageObjects/EntryPage';
import { HomePage } from '../PageObjects/HomePage';
import { RegisterPage } from '../PageObjects/RegisterPage';
import { AccountPage } from '../PageObjects/AccountPage';
import {Actions} from '../PageObjects/Actions'; 
import { PlaywrightBlocker } from '@ghostery/adblocker-playwright';
import data from './utils/register.json';

for(const dt of data){
test(`User Registration ${dt.UserName}`, async({page})=>{

    const blocker= await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    await blocker.enableBlockingInPage(page);

    const entryPage= new EntryPage(page);
    const homePage= new HomePage(page);
    const registerPage= new RegisterPage(page);
    const accountPage= new AccountPage(page);
    const actions= new Actions(page);

    const BussName= dt.BussName;
    const UserName= dt.UserName
    const UserEmail= dt.Email
    // await entryPage.gotoUrl();
    // await entryPage.clickBrowser();
    // await homePage.clickReg();
    // await registerPage.registerUser('Blood Bank',BussName, UserName, UserEmail,'TestUser@1234','TestUser@1234');
    // await page.waitForTimeout(5000);
    await test.step(`Open URL and go to Registration Page`, async()=>{
    await actions.gotoUrl('https://www.medimention.com/');
    await actions.clickElement(entryPage.browserBtn);
    await actions.clickElement(homePage.signupBtn);
    })

    await test.step(`Fill Registration Form and Submit`, async()=>{
    await registerPage.registerBtn.selectOption(dt.GroupName);
    await actions.fillInput(registerPage.nameTxt, BussName);
    await actions.fillInput(registerPage.usernameTxt, UserName);
    await actions.fillInput(registerPage.emailTxt, UserEmail);
    await actions.fillInput(registerPage.passwordTxt, dt.Password);
    await actions.fillInput(registerPage.confPassTxt, dt.ConfirmPassword);
    await actions.clickElement(registerPage.agreeTick);
    await actions.clickElement(registerPage.regBtn);
    })
    // Assertion
    await test.step(`Verify Account and Profile Name`, async()=>{
    const accountHead= await accountPage.accText();
    expect(accountHead.includes(BussName)).toBeTruthy();
    const profHead= await accountPage.profText();
    expect(profHead.includes(UserName)).toBeTruthy();
    console.log(accountHead, profHead);
    })

    await page.waitForTimeout(4000);
})

}