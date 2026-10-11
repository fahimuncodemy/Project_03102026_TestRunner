import {test, expect} from '@playwright/test';
import { EntryPage } from '../PageObjects/EntryPage';
import { HomePage } from '../PageObjects/HomePage';
import { RegisterPage } from '../PageObjects/RegisterPage';
import { AccountPage } from '../PageObjects/AccountPage';
import {Actions} from '../PageObjects/Actions'; 
import { PlaywrightBlocker } from '@ghostery/adblocker-playwright';

test('User Registration', async({page})=>{

    const blocker= await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    await blocker.enableBlockingInPage(page);

    const entryPage= new EntryPage(page);
    const homePage= new HomePage(page);
    const registerPage= new RegisterPage(page);
    const accountPage= new AccountPage(page);
    const actions= new Actions(page);

    const BussName= `testN${Date.now()}Business`;
    const UserName= `testN${Date.now()}User`;
    const UserEmail= `testU${Date.now()}@xyz.com`;
    // await entryPage.gotoUrl();
    // await entryPage.clickBrowser();
    // await homePage.clickReg();
    // await registerPage.registerUser('Blood Bank',BussName, UserName, UserEmail,'TestUser@1234','TestUser@1234');
    // await page.waitForTimeout(5000);

    await actions.gotoUrl('https://www.medimention.com/');
    await actions.clickElement(entryPage.browserBtn);
    await actions.clickElement(homePage.signupBtn);
    await registerPage.registerBtn.selectOption('Blood Bank');
    await actions.fillInput(registerPage.nameTxt, BussName);
    await actions.fillInput(registerPage.usernameTxt, UserName);
    await actions.fillInput(registerPage.emailTxt, UserEmail);
    await actions.fillInput(registerPage.passwordTxt, 'TestUser@1234');
    await actions.fillInput(registerPage.confPassTxt, 'TestUser@1234');
    await actions.clickElement(registerPage.agreeTick);
    await actions.clickElement(registerPage.regBtn);
    // Assertion
    const accountHead= await accountPage.accText();
    expect(accountHead.includes(BussName)).toBeTruthy();
    const profHead= await accountPage.profText();
    expect(profHead.includes(UserName)).toBeTruthy();

    await page.waitForTimeout(4000);
})