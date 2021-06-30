const Context = require('../../state/context')

let context = new Context();

class ChatBotElements {

  chatElement () {
    let xPath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View'
    return  context.getDriver().elementByXPath(xPath)
  }

}

module.exports = ChatBotElements;
