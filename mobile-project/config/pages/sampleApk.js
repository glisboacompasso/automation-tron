
const SampleApkElementsAndroid = require('../../ANDROID/elements/sampleApk.elements');
let sampleApkAndroid = new SampleApkElementsAndroid();



const Context = require('../../state/context')
let context = new Context();


class SampleApk {

   async clickBtnOpenChat() {


        if (context.getDevice().system.toLocaleLowerCase() == 'ios') {
            //@todo
        }else {
            var openChatBtn = await sampleApkAndroid.openChatBtn();

            await openChatBtn.click();


    }


}

}

module.exports = SampleApk;