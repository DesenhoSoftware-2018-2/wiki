# Guia de Instalação do aplicativo Banquinha

### 1 - Primeiro, leia o nosso [guia de contribuição](docs/CONTRIBUTING.md) o qual explica todos os passos para poder contribuir. <br/>Obs.: Não se esqueça de ler o nosso [código de conduta](docs/CODE_OF_CONDUCT.md).

### 2 - Ta na hora de instalar as dependências para criar/rodar um app em React Native
Para poder executar e contribuir para o projeto, você deverá ter o Node.js instalado em sua máquina. No momento da elaboração desse guia, a versão do Node nos repositórios é a v10.10.0 e a do npm é a v6.4.1. Esta não será a última versão, mas deve ser bastante estável, e deve ser suficiente para uma experimentação rápida com a linguagem.

Para obter esta versão, temos apenas que utilizar o gerenciador de pacotes culr e npm, os quais podem ser instalados através desses comandos:

1. Intalar o Creationnix
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh
```

2. Após a intalação do Creationix, é necessário rodar o seguinte comando:
```bash
$ bash
```

3. Agora está tudo pronto para instalar o Node:
```bash
$ nvm install node
```

4. Para instalar as dependências do projeto, é necessário estar na pasta raiz do projeto e rodar:

```bash
$ npm install
```

Pronto! O seu ambiente já está pronto para o desenvolvimento.

### 3 - Execute a aplicação

Executar é mais simples ainda! Basta digitar o seguinte comando que ele irá gerar um QRCode, o qual você pode ler o código com o aplicativo [Expo](https://expo.io):

```bash
$ npm start
```

Você pode rodar também com algum emulador no próprio computador, para isso é necessário seguir esse [tutorial](https://facebook.github.io/react-native/docs/getting-started.html) na aba Building Projects with Native Code.

Caso reste dúvidas, você também pode entrar em contato conosco criando uma issue ou pelo email calebersmendes@gmail.com.  
