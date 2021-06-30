const Context = require('../../state/context')

let context = new Context();

class SampleApkElement {


   openChatBtn () {
    let id = 'br.com.uol.ps.sdk.sampleapp.debug:id/button_open_chat';
    return  context.getDriver().elementById(id)

}

}

module.exports = SampleApkElement;
