const {default: Symbols} = require('selenium-webdriver/lib/symbols');
var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var options = new chrome.Options();



async function waitForPageLoad(driver) {
    await driver.wait(function () {
        return driver.executeScript('return document.readyState').then(function (readyState) {
            return readyState === 'complete';
        });
    }, 100000);
}


async function getDriver() {
    options.addArguments("window-size=1920,1080");
    var driver = await new webdriver.Builder().setChromeOptions(options).forBrowser('chrome').build();
    await driver.manage().setTimeouts({implicit: (2000)});
    return driver;

}


async function navigateTo(driver, url) {
    await driver.get(url);
}

async function quit(driver) {
    await driver.quit();
}


module.exports = {
    getDriver,
    navigateTo,
    quit,
    waitForPageLoad

};
