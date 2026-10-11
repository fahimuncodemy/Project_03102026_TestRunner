exports.AccountPage=
class AccountPage {
    constructor(page){
        this.page= page;
        this.accHead= page.locator(".navbar-brand small");
        this.profileHead= page.locator(".user-info").nth(1);
    }

    async accText(){
        return this.accHead
    }

    async profText(){
        return this.profileHead
    }
}