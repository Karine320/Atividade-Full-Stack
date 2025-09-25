# API TRABALHO DE RECUPERAÇÃO - DESENVOLVIMENTO FULL STACK 
## Descrição Do Projeto
O trabalho é uma API REST simples utilizando Node.js e Express.
A API servirá para gerenciar uma lista de tarefas (To-do list), com funcionalidades básicas
de CRUD:

● Criar uma nova tarefa

● Listar todas as tarefas

● Atualizar uma tarefa existente, informando o ID

● Excluir uma tarefa existente, também pelo ID

As tarefas foram armazenadas em memória e a comunicação entre cliente e servidor será via JSON.

## Pré-Requisitos
certifique-se de que você tem o **Node.js** e o **npm** (gerenciador de pacotes do Node.js) instalados em sua máquina. Você pode verificar as versões com os seguintes comandos:
node -v
npm -v



## Instalação
Para configurar o projeto localmente, siga estes passos:

Clone o repositório:
git clone [URL_DO_REPOSITORIO]

Navegue até o diretório do projeto:
cd [NOME_DO_PROJETO]

Instale as dependências:
npm install

## Rotas da Api 
Método HTTP	Rota	Descrição
 GET	/api/tarefa Retorna todos os recursos.

POST	/api/tarefa	Cria um novo recurso.

PUT	/api/tarefa/:id	Atualiza um recurso existente pelo ID.

DELETE	/api/tarefa/:id	Deleta um recurso pelo ID.


## Comando para iniciar o servidor
npm start 

npm /api.js

## Como Testar com o Postman
Você pode usar o Postman para testar todas as rotas da API.

Abra o Postman e crie uma nova requisição.

Insira a URL completa da rota (por exemplo, http://localhost:3000/api/tarefa).

Selecione o método HTTP correspondente (GET, POST, PUT, DELETE).

Para as requisições POST e PUT, selecione a aba Body, escolha a opção raw e o tipo JSON no menu suspenso. Cole o JSON de exemplo no corpo da requisição.

Clique em Send para enviar a requisição e ver a resposta da API.
