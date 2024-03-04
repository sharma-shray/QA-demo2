var page = require("../BaseUtils");
var config= require("../config");
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    assert = require('assert');
 async function login (driver) {
    await page.waitForPageLoad(driver);
    await driver.findElement(By.xpath("//button[@id='onetrust-accept-btn-handler']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("email")).sendKeys(config.userConfig.username);
    await driver.findElement(By.id("password")).sendKeys(config.userConfig.password);
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
    await driver.sleep(3000);
    await page.waitForPageLoad(driver);
 }

async function assertLogout (driver) {

    var value= await driver.findElement(By.className("menu-item-label")).getText();
    await console.log(value);
    await assert(value === "Logout");
}





 module.exports = {login,assertLogout};