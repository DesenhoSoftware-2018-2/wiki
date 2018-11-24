## GOFs

#### Padrões Django

|Padrão GOFs|Forma aplicada|Classe aplicada|Explicação|
|:-----------:|:-----------:|:--------------:|:-----------:|
|Template method|	O padrão template foi aplicado utilizando class based views, o padrão do python para template não é "purista" e permite sobreescrita do metodo template.|	Class based views de Events e Profile	| O metodo api_view() presente em todas as views. e na classe Profile, que sobrescreve os métodos da classe do Django User.|
|Facade	|O django utiliza de roteamento de urls centralizados em uma fachada no arquivo urls.py (uma facade por app e uma geral do projeto)|	Class based views de Events e Profile	|As requisições são centralizadas pelo servidor Django que chama a classe view mapeada para o padrão de URL.|
|Command|	O padrão command foi aplicado através da utilização do componente HttpRequest do próprio Django, que encapsula um request em um objeto, sendo aplicado em todas as class based views da aplicação e evidenciado na view de profile.	|Class based views de Events e Profile |	Quando é feita uma requisição de uma página, o django cria um objeto do tipo HttpRequest que contém os metadados sobre a requisição, carregando em seguida a view apropriada passando o HttpRequest como argumento inicial para a função da view. Cada view é responsável por retornar um objeto HttpResponse.|
|Observer|Foi utilizado uma abstração do conceito do padrão Observer, onde é necessário observar um atributo de Profile e criamos uma classe para realizar essa observação.|Class ProfileObserver|Para manter atualizado o status dos participantes do chat de um evento, utilizamos a classe ProfileObserver para manter uma lista de profiles onde o chat pode consultar o status dos participantes pelo método getStatusProfile().|

#### Padrões React

##### Singleton:
Em JavaScript, os Singletons servem como um namespace de recurso compartilhado que isola o código de implementação do namespace global para fornecer um único ponto de acesso para funções.

##### Protorype:
O padrão não é apenas uma maneira fácil de implementar herança, mas também pode ter um aumento de desempenho: ao definir uma função em um objeto, todos eles são criados por referência (para que todos os objetos filhos apontem para a mesma função) em vez de criar suas próprias cópias individuais.

##### Command:
Os objetos de comando simples e simples de implementar unem uma ação e o objeto que deseja invocar a ação. Eles consistentemente incluem uma operação de execução (como run() ou execute()). Todos os objetos Command com a mesma interface podem ser facilmente trocados conforme necessário e isso é considerado um dos maiores benefícios do padrão.

##### Facade:
As fachadas são um padrão estrutural que pode ser visto em bibliotecas JavaScript como React, onde, embora uma implementação possa suportar métodos com uma ampla gama de comportamentos, apenas uma "fachada" ou abstração limitada desses métodos é apresentada ao público para uso.
