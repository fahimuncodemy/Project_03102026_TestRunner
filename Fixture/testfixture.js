import {test, expect} from '@playwright/test';

let random= Math.floor(Math.random() * 1000);
let id= Math.floor(Math.random()*15);
export const customTest= test.extend({
    testData: {
    id: id,
    BussName: `testN${random}Business`,
    UserName: `testN${random}User`,
    UserEmail: `testU${random}@xyz.com`,
    Password: 'TestUser@1234',
    ConfirmPassword: 'TestUser@1234'
    }
})