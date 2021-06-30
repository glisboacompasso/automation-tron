const {Given, When, Then, After, Before}  = require('cucumber');
const  assert = require('assert');

const AppiumWebDriver = require('../../../config/appiumWebDriver.config');
const Context = require('../../../state/context')

const SampleApkPage = require('../../../config/pages/sampleApk.js')
const ChatbotPage = require('../../../config/pages/chatBot.js')

let appiumWebDriver = new AppiumWebDriver();
let context = new Context();
let sampleApkPage = new SampleApkPage();
let chatBotPage = new ChatbotPage();



Before(async function(){

    await context.setDevice(this.device);

 });



Given(`Esteja na sessão do app que disponibiliza o chatbot`,{timeout: 100 * 1000}, async function(){

   await appiumWebDriver.init()

});


When('clico para abrir o chat',{timeout: 100 * 1000}, async function(){

    await sampleApkPage.clickBtnOpenChat()





});

Then("O sistema carrega a webview com o chatbot me possibilitando interagir com ele",{timeout: 100 * 1000}, async function(){

   let isEnabledChatElement = await chatBotPage.isEnabledChatElement()

   assert.ok(isEnabledChatElement)
});

After(async function(){

   await context.getDriver().quit()

});

