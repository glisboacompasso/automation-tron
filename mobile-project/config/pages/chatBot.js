
const ChatBotElementsAndroid = require('../../ANDROID/elements/chatBot.elements');
let chatBotElementsAndroid = new ChatBotElementsAndroid();



const Context = require('../../state/context')
let context = new Context();


class ChatBot {

   async isEnabledChatElement() {


        if (context.getDevice().system.toLocaleLowerCase() == 'ios') {
            //@todo
        }else {

            var chatElement = await chatBotElementsAndroid.chatElement();

            return await chatElement.isDisplayed();

    }


}

}

module.exports = ChatBot;