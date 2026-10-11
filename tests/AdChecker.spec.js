import {test, expect} from '@playwright/test';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import {chromium} from 'playwright-extra';

chromium.use(stealthPlugin());
test('Ad Blocker Test', async({})=>{
    
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto('https://demo.opencart.com/');

    await page.locator("[name='search']").fill('MacBook');

    await page.waitForTimeout(3000);
})