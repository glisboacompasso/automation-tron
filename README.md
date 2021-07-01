# Automação Multiplataforma (IOS e Android Nativos) com appium.io  e vanilla JS

 

## Objetivo
Este projeto tem como foco fornecer um template para desenvolver uma suíte de testes de regressão de qualquer sistema que possua aplicativos nativos para Android e IOS nas diferentes versões de sistema e aparelhos que são comuns a aplicações mobile

## Requisítos

 - Uma conta no https://www.browserstack.com/live
 - Baixar e Instalar [Appium Desktop](https://github.com/appium/appium-desktop/releases/latest)
 - Baixar e Instalar [Node.js](https://nodejs.org/pt-br/download/)
 - Baixar os Aplicativos exemplos para [Android(.apk)](https://nodejs.org/pt-br/download/) e [IOS(.ipa)](https://drive.google.com/file/d/1JL8WszHrovaZWBWBv02pjjErbotJ9DWp/view?usp=sharing)
 - Java >= 8.0 ** 
 - Android SDK **

_ **  É necessário apenas para verificar os elementos dos aplicativos com o Appium Desktop , não é necessária a instalação para rodar os testes, pois os testes são executados no servidor do BrowserStack que já possui essa ferramenta instalada e configurada_
 

# Primeiros Passos
**Legenda**:  
** Os passos que possuírem o sufixo " ** " são considerados opcionais. São necessários apenas para verificar os elementos de um aplicativo, pois os testes são executados no servidor do BrowserStack que já possui essa ferramenta instalada e configurada

## 1 - Instalar o Node.js

Instale o node.js em seu computador

[Documentação Auxiliar](https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux#:~:text=js%20em%20Windows%2C%20Mac%20e,por%C3%A9m%2C%20costuma%20ser%20mais%20antiga.)

## 2 -  Instalar o Java >= 8 **
Instalar o Java e definir a JAVA_HOME no computador

[Documentação Auxiliar](https://techexpert.tips/pt-br/windows-pt-br/instalar-java-jdk-no-windows/)

## 3 -  Instalar Android SDK **
Instalar o Android SDK e definir a ANDROID_HOME no computador


## 4 - Subir os aplicativos de exemplo no Browser Stack

**Subir .apk**
-
Rodar o comando a baixo via linha de comando ex: (CMD) ,  substituindo <font color='DarkViolet'>{usuario.browsserstack}</font>  e <font color='DarkViolet'>{senha.browsserstack}</font> por seu usuário e senha respectivamente do browserstack
![Usuário e Senha Browser Stack](https://i.imgur.com/QghwokP.png)
 Substituir <font color='DarkViolet'>{caminho.apk}</font>  pelo caminho do aplicativo em seu computador ex: *C:\Users\guilherme.lisboa\Documents\Apk\calc.apk*

```bash
    curl -u "{usario.browsserstack}:{senha.browserstack}" \
    -X POST "https://api-cloud.browserstack.com/app-automate/upload"" \
    -F "file=@{caminho.apk}" \
    -F "custom_id=calc-android"
```
**Verificar se o aplicativo Android subiu no Browser Stack**

Rodar o comando a baixo via linha de comando substituindo <font color='DarkViolet'>{usuario.browsserstack}</font>  e <font color='DarkViolet'>{senha.browsserstack}</font> _ pelo seu usuário e senha do BrowserStack e verificar se o app com o *custom_id=calc-android* aparece na listagem
```bash
curl -u "{usuario.browsserstack}:{senha.browsserstack}" \
-X GET "https://api-cloud.browserstack.com/app-automate/recent_apps"

```

**Subir .ipa**
-
Repetir os mesmos passos do .apk subistituindo o <font color='DarkViolet'>{custom_id=calc-android}</font> por <font color='DarkViolet'>{custom_id=calc-ios}</font> 


**Documentação BrowserStack**
- 
https://www.browserstack.com/docs/app-automate/appium/upload-app-from-filesystem



## 5 - Abrir o Appium Desktop validar sessão do Browser Stack

Abrir o aplicativo do Appium Desktop
![Appium Desktop](https://i.imgur.com/FqwFTmG.png)
Verificar ANDROID_HOME e JAVA_HOME
![Appium-Desktop-EDIT-CONFIG](https://i.imgur.com/WIqZPHI.png)![Android-Desktop-Android-Java-Home](https://i.imgur.com/zYNOlhG.png)
Iniciar o Server
![appium-desktop-start-server](https://i.imgur.com/P70BCxc.png)
Iniciar o Inspetor 

![appium-desktop-inspec](https://i.imgur.com/ia2Lq40.png)
Selecionar a aba do BrowserStack e informar seu usuário e senha
![appium-desktop-inspector-bs](https://i.imgur.com/99oLtav.png)
Informar as Capability's

 **Android:**
 Trocar {app_url} pela url do app de exemplo Android do seu usuário. No passo 4 é possível verificar como listar os app's onde você pode obter o seu app_url
 
```json
{  
  "app": "{app_url}",
  "device": "Google Pixel 3",
  "platformName":"Android",  
  "platformVersion": "10.0"
 }
```


 **IOS:**
 Trocar {app_url} pela url do app de exemplo IOS do seu usuário. No passo 4 é possível verificar como listar os app's onde você pode obter o seu app_url
 
```json
{
  "app": "{app_url}",
  "device": "iPhone 12 Pro",
  "os": "ios",
  "realMobile": true,
  "os_version": "14"
}
```
Iniciar sessão do appium desktop 
![Iniciar Sessão BrowserStack](https://i.imgur.com/NepBJUY.png)
![Aplicativo IPA - BRowserStack](https://i.imgur.com/rGSawQd.png)

**Repetir no APK**
Lembrando que você também deve iniciar a sessão do browserstack com o aplicativo android para garamtir que os testes possam ser executados corretamente


# 6 - Abrir o Projeto e Alterar o Secrets

 
Dentro do nosso projeto existe um arquivo chamado **secrets_example.json** você deve realizar uma cópia desse arquivo e renomear para **secrets.json**
	![secrets-example](https://i.imgur.com/wqNfE4i.png)
 
![enter image description here](https://i.imgur.com/ZLf1HYG.png)

![enter image description here](https://i.imgur.com/NzjoV8O.png)
Agora dentro do arquivo **secrets.json** você deve alterar o browserstackuser , broswerstackkey, app_url_ios e app_url_android por seu usuário do BrowserStack, sua senha do BrowserStack , o url do app iOS que você utilizou no passo anterior e o url do app Android que você utilizou no passo anterior respectivamente

# 7 - Assistir o Vídeo Explicativo do Projeto
<iframe width="560" height="315" src="https://www.youtube.com/embed/R-l5eLHhPJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# 8 - Capturar Elementos do Seu Projeto Real

Agora você deve capturar os elementos do seu aplicativo real e criar a page dentro de **mobile-project\config\pages** e criar o retorno dos elementos Android e iOS da sua aplicação real em **mobile-project\ANDROID\elements** e **mobile-project\IOS\elements**



![enter image description here](https://i.imgur.com/NY7gdg2.png)

![enter image description here](https://i.imgur.com/0uY5SLz.png)


Como Capturar os Elementos da Minha Aplicação Usando o Appium Desktop
-
Você deve subir o(s) seu(s) app(s) real(ais) em seu BrowserStack, já demonstrado no **passo 4** dessa documentação, iniciar o appium desktop com seu app real, descrito no **passo 5**

Agora vamos selecionar o modo de gravação
![enter image description here](https://i.imgur.com/Fk6t0HT.png)

Realizar as ações selecionando os elementos e clicando em TAP

![enter image description here](https://i.imgur.com/8X6tAsy.png)

Na sessão **Recorder** selecionar a opção **JS - WD (Promise)** e lá o Appium Desktop vai gerar o código com o seletor e o método de  busca do webdriver do Appium

![enter image description here](https://i.imgur.com/CfnQ5qY.png)

# Obrigado !
Meu Linkedin:
 https://www.linkedin.com/in/guilherme-luz-lisboa-7370b1106/

