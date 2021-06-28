const {appiumDriver,IOSCaps, AndroidCaps} = require('./wsBasic.config.js');
const Context = require('../state/context');
let context = new Context();



class AppiumWebDriver {

    // async init(device = { model: "", system: "", version: ""}) {
    async init() {

        switch (context.getDevice().system.toLowerCase()) {
            case "ios":

                await appiumDriver.init(IOSCaps());

                context.setDriver(appiumDriver);

                break;

            default:

                await appiumDriver.init(AndroidCaps());

                context.setDriver(appiumDriver);

                break;

        }



        await setImplicitWaitTimeout()


    }


    async quit() {

        let driver = context.getDriver()

       await driver.quit()
    }


}




async function setImplicitWaitTimeout() {


    let driver = await context.getDriver()

    await driver.setImplicitWaitTimeout(10000)

    }


module.exports = AppiumWebDriver;

