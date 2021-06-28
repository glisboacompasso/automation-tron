const Context = require('../../state/context')

let context = new Context();

class InitialElements {


 //Numbers Painel
   btnNumber1 () {
        let id = 'com.google.android.calculator:id/digit_1';

        return  context.getDriver().elementById(id)

    }

    btnNumber2 () {
        let id = 'com.google.android.calculator:id/digit_2';

        return  context.getDriver().elementById(id)
    }

    btnPlus () {
        let accessibilityId = 'plus';

        return  context.getDriver().elementByAccessibilityId(accessibilityId)
    }

    btnEqual () {
        let accessibilityId = 'equals';

        return  context.getDriver().elementByAccessibilityId(accessibilityId)

      }

    resultLabel () {
      let id = 'com.google.android.calculator:id/result_final';

      return  context.getDriver().elementById(id)

      }


}


module.exports = InitialElements;
