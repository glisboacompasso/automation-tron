const { appiumDriver, IOSCaps, AndroidCaps, bsLocal, bsLocalArg } = require('./wsBasic.config.js');
const Context = require('../state/context');
let context = new Context();



class AppiumWebDriver {

    async init() {


        try {
            await bsLocal.start(await bsLocalArg, () => {

                console.log('Starting BrowserStackLocal')
                console.log(context.getDevice())
            })
        } catch (e) {
            throw new Error("BrowserStackLocal failed start", e.messages)
        }


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

        await bsLocal.stop(bsLocalArg, function () {
            console.log("Stopped  BrowserStackLocal");
        })

        let driver = context.getDriver()

        await driver.quit()
    }


}




async function setImplicitWaitTimeout() {


    let driver = await context.getDriver()

    await driver.setImplicitWaitTimeout(1000000)

}


module.exports = AppiumWebDriver;

