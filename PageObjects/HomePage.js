exports.HomePage=
class HomePage {
    constructor(page) {
        this.page = page;
        this.loginBtn= "//a[text()='Login']";
        this.signupBtn= page.getByRole('link', {name: "Join Us"});
    }

    // async clickReg(){
    //     await this.page.getByRole('link', {name: this.signupBtn}).click();
    // }

    // async clickLogin(){
    //     await this.page(this.loginBtn).click();
    // }
}