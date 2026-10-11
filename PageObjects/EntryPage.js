exports.EntryPage=
class EntryPage {
    constructor(page) {
        this.page = page;
        this.browserBtn = page.getByRole('link', {name: 'Browse'});
    }

    // async gotoUrl(){
    //     await this.page.goto('https://www.medimention.com/');
    // }
    // async clickBrowser(){
    //     await this.page.getByRole('link', {name: this.browserBtn}).click();
    // }
}