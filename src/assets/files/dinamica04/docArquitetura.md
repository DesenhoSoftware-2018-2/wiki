## Documento de Arquitetura

### 1 Introdução
O documento de arquitetura tem a função de especificar decisões arquiteturais relevantes na produção e implementação do projeto Banquinha, descrevendo aspectos e funcionalidades do sistema de forma clara e objetiva.

### 1.1 Finalidade
Este documento oferece uma visão geral arquitetural abrangente do sistema, usando diversas visões arquiteturais para representar diferentes aspectos do sistema. O objetivo deste documento é capturar e comunicar as decisões arquiteturais significativas que foram tomadas em relação ao sistema.

### 1.2 Escopo
Este documento de Arquitetura de Software se aplica ao software Banquinha desenvolvido pelos alunos da disciplina de Arquitetura e desenho de software, ministrada pela professora Milene Serrano.

### 2. Representação Arquitetural
#### 2.1. Diagrama de relações

![diagrama_relacoes_image](dinamica04/relacionamento.png)

#### 2.2 Diagrama de classes

#### 2.3 Iteração react e API

A aplicação web será desenvolvida utilizando a biblioteca JavaScript React.js. Essa biblioteca oferece componentização e reuso, com isso será reduzida a duplicação de código. Além disso, essa biblioteca é single page application, ou seja a interface interagem com o usuário dinamicamente reescrevendo a mesma página, sem carregar toda a página a medida que ela sofre alterações.  
O React também tem boa performance porque mantém uma cópia do DOM (Document Object Model) em memória chamada Virtual-DOM. Quando um dado é alterado e é necessária uma alteração na view, o React verifica pelo Virtual-DOM quais partes devem ser alteradas. Dessa forma, evita a lentidão de acessar diretamente o DOM todo o tempo.  

### 3. Metas e Restrições da Arquitetura
#### 3.1. Restrições Tecnológicas
Para o desenvolvimento deste projeto serão utilizadas as seguintes tecnologias:  
[React](https://reactjs.org/) - Utilizado na implementação do front-end Web da aplicação;   
[Django](https://www.djangoproject.com/) - framework Web Python de alto nível;  
[Python](https://www.python.org/) - Linguagem de programação utilizada na API do projeto;  
[postgreeSQL](https://www.postgresql.org/) - Banco de dados.  

#### 3.1. Requisitos Não Funcionais
A arquitetura deve respeitar os seguintes requisitos não funcionais:  
- O sistema deve estar disponível 24 horas do dia , 7 dias por semana. Isto porque deverá estar disponível para o uso de lazer e os usuários podem procurar durante o dia ou à noite;  
- A interface Web do sistema deve ser capaz de ser acessado em múltiplos browsers, para estar disponível a diferentes dispositivos;  
- O sistema deverá proteger informações e acesso, pois os dados manipulados no sistema não devem estar disponíveis ao público em geral, e sim apenas aos usuários do sistema;  
- O sistema deve ser de fácil navegação e uso, para que o usuário não tenha problemas com a navegabilidade e tenha uma boa experiência ao usar o software;
O sistema deverá suportar o crescimento do número de usuários, pois tende a manter um grande número de usuários cadastrados;  
- O código deve ser facilmente modificado e corrigido, para garantir uma boa manutenibilidade;

### 4 - Arquitetura dos Serviços e visão de Implementação
#### Visão Geral

#### Diagrama de Pacotes

#### Visão de dados
