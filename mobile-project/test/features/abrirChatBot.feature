Feature: ChatBot

    Esses testes tem como objetivo verificar a compatibilidade do chatbot com o universo de dispositivos dos usuários da PAG
        Foi feito um levantamento através do New Relic, tambem levando em consideracao as versoes menimas de suporte da PAG
        Andorid 5.0 ou + . iOS 11.0 ou mais. Os aparelhos que serao testados são passados através de linha de comando é possível verificar mais através do package


Scenario: Abrir WebView do ChatBOt
Given Esteja na sessão do app que disponibiliza o chatbot
When clico para abrir o chat
Then O sistema carrega a webview com o chatbot me possibilitando interagir com ele
