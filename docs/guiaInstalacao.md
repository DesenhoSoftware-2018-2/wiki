# Guia de Instalação

### 1 - Primeiro leia o nosso [guia de contribuição](docs/CONTRIBUTING.md) onde são explicados todos os passos para contribuir. Ah, não esquece de ler nosso [código de conduta](docs/CODE_OF_CONDUCT.md).
Para poder executar e contribuir com o projeto, você deve ter o [Node.js](https://nodejs.org/en/) em sua máquina.

Para instalar a nossa wiki é bem simples, basta seguir os passos a seguir e se restar dúvidas procure a documentação oficial do react.


### 2 - Em seguida instale as dependências

No momento da elaboração desse guia, a versão nos repositórios é a v8.11.4. Esta não será a última versão, mas deve ser bastante estável, e deve ser suficiente para uma experimentação rápida com a linguagem.

Para obter esta versão, temos apenas que utilizar o gerenciador de pacotes apt. Devemos atualizar nosso índice de pacotes primeiro e então, instalar através dos repositórios:

```bash
$ sudo apt-get update
```
```bash
$ sudo apt-get install nodejs
```

Você vai precisar também instalar o npm, que é o gerenciador de pacotes do Node.js. Você pode fazer isto digitando:

```bash
$ sudo apt-get install npm
```

O projeto possui algumas dependências particulares que estão no arquivo package.json, você deve executar ele para instalar essas dependências, execute o seguinte comando na raiz do projeto:

```bash
$ npm install
```

Pronto seu ambiente já está pronto para o desenvolvimento.

### 3 - Execute a aplicação

Executar é mais simples ainda, basta digitar o seguinte comando que ele executará seu projeto no seu navegador padrão:

```bash
$ npm start
```

Caso reste duvidas você também pode entrar em contato conosco criando uma issue ou pelo email isaquealvesdl@gmail.com.  
