## GOFs

|Padrão GOFs|Forma aplicada|Classe aplicada|Explicação|
|:-----------:|:-----------:|:--------------:|:-----------:|
|Template method|	O padrão template foi aplicado utilizando class based views, o padrão do python para template não é "purista" e permite sobreescrita do metodo template.|	Class based views de Events e Profile	| O metodo api_view() presente em todas as views.py|
|Facade	|O django utiliza de roteamento de urls centralizados em uma fachada no arquivo urls.py (uma facade por app e uma geral do projeto)|	Class based views de Events e Profile	|As requisições são centralizadas pelo servidor Django que chama a classe view mapeada para o padrão de URL.|
|Command|	O padrão command foi aplicado através da utilização do componente HttpRequest do próprio Django, que encapsula um request em um objeto, sendo aplicado em todas as class based views da aplicação e evidenciado na view de profile.	|Class based views de Events e Profile |	Quando é feita uma requisição de uma página, o django cria um objeto do tipo HttpRequest que contém os metadados sobre a requisição, carregando em seguida a view apropriada passando o HttpRequest como argumento inicial para a função da view. Cada view é responsável por retornar um objeto HttpResponse.|
|Decorator	| ||||
