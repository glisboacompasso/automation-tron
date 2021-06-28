wd = require('wd');

const Context = require('../state/context');
let context = new Context();



let secrets = require('./files/secrets.json')


const browserStackCaps = {
            // Set your BrowserStack access credentials
            'browserstack.user' : secrets.browserstackuser,
            'browserstack.key'  : secrets.browserstackkey,
            'browserstack.debug' : true,
            'project' : 'POC - BDD - JavaScript - CHATBOT - RASA',
}

 let IOSCaps = function () { return {

        ...browserStackCaps,

          // Set URL of the application under test
        'app' : secrets.app_url_ios,

        // Specify device and os_version for testing
        'device' : context.getDevice().model,
        'os_version' : context.getDevice().version,

        // Set other BrowserStack capabilities

        'build' : 'ChatBot-Mobile - IOS',
        'name': 'first_test'
 }

}



let AndroidCaps = function () { return {

  ...browserStackCaps,

    // Set URL of the application under test
    "app": secrets.app_url_android,

  // Specify device and os_version for testing
  'device' : context.getDevice().model,
  'platformName': 'Android',
  'platformVersion': context.getDevice().version,

  // Set other BrowserStack capabilities
  'build' : 'ChatBot-Mobile - Android',
  'name': 'first_test'
}

}

const appiumDriver  = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");



module.exports ={ IOSCaps, AndroidCaps, appiumDriver}

