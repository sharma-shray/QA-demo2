var page = require("../lib/BaseUtils");
var loginpage = require("../lib/Page_libraries/loginPage");
var config = require("../lib/config");
var driver;
describe('Login page demo', async function () {

    beforeAll(async function () {
        driver = await page.getDriver("chrome");
        // navigation to  instance
        await page.navigateTo(driver, config.instanceConfig.instanceURL);

        //Login with  credentials
        await loginpage.login(driver);
    });
    afterAll(async function () {

        await driver.quit();

    });

    it('Asserting the login', async function () {
       // Assert for logout as only after successfully logging in we can see a logout button.
        await loginpage.assertLogout(driver);

        // do your thing :)
    })

})
