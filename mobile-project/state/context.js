/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 */

global.Context  = { device: { model: "", system: "", version: ""} ,
                    driver: "" }


 class Context {


    setContext(context) {
        global.Context = context
        }

    getContext() {
        return global.Context
        }

    setDriver(driver) {
        global.Context.driver = driver
    }

    getDriver() {
       return global.Context.driver
    }

    setDevice(device) {
        global.Context.device = device
    }

    getDevice() {
        return global.Context.device
    }




}

module.exports = Context;