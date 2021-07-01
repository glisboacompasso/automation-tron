const Context = require('../../state/context')

let context = new Context();

class InitialElements {


    //Numbers Painel
    async btnNumber1 () {

        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[17]';

        return context.getDriver().elementByXPath(xPath);


    }

    btnNumber2 () {
        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[18]';

        return context.getDriver().elementByXPath(xPath);
    }


    //Calc Btns

    btnPlus () {
        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[16]';

        return context.getDriver().elementByXPath(xPath);
    }

    btnEqual() {
        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[23]';

        return context.getDriver().elementByXPath(xPath);
    }

    resultLabel (expectResult = 0) {
        let xPath = `//XCUIElementTypeStaticText[@name=\"${expectResult}\"]`;

        return context.getDriver().elementByXPath(xPath);
    }


}

module.exports = InitialElements;
