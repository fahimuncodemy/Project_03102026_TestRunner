exports.RegisterPage=
class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerBtn = page.locator("#UserRole");
        this.nameTxt= page.locator("#DetailName");
        this.usernameTxt= page.locator("#UserUsername");
        this.emailTxt= page.locator("#UserEmail");
        this.passwordTxt= page.locator("#UserPassword");
        this.confPassTxt= page.locator("#UserPassword1");
        this.agreeTick= page.locator("[type='checkbox']");
        this.regBtn= page.locator("//button[text()='Register']");
    }

    // async registerUser(BGroup, BName, UName, UEmail, UPass){
    //     await this.registerBtn.selectOption(BGroup);
    //     await this.nameTxt.fill(BName);
    //     await this.usernameTxt.fill(UName);
    //     await this.emailTxt.fill(UEmail);
    //     await this.passwordTxt.fill(UPass);
    //     await this.confPassTxt.fill(UPass);
    //     await this.agreeTick.click();
    //     await this.regBtn.click();
    // }
}