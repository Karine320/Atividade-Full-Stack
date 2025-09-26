# API REST - TRABALHO DE RECUPERAÇÃO 
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

Editor de Código: VS Code ou similar (opcional).

Ferramenta de Teste: Postman 



## Instalação
Para configurar o projeto localmente, siga estes passos:
Passos para Instalar e Rodar
Clone ou Crie o Projeto:

Abra o terminal e crie a pasta: mkdir api-tarefas && cd api-tarefas.
(Se GitHub: git clone <repo-url> e cd api-tarefas).
Inicialize o npm:

Rode: npm init -y (cria package.json).
Instale Dependências:

Rode: npm install express (instala o Express).
Adicione o Código:

Crie o arquivo app.js na raiz e cole o código fonte fornecido.
Execute o Servidor:

Rode: node app.js.
Saída esperada: "Servidor rodando na porta 8080".
Acesse: http://localhost:8080/tarefas (deve retornar JSON da lista inicial).

## Rotas da Api 
Método HTTP	Rota	Descrição

 GET	/api/tarefa Retorna todos os recursos.

POST	/api/tarefa	Cria um novo recurso.

PUT	/api/tarefa/:id	Atualiza um recurso existente pelo ID.

DELETE	/api/tarefa/:id	Deleta um recurso pelo ID.


## Comando para iniciar o servidor
Para iniciar o servidor (app.js com Express), certifique-se de estar na pasta do projeto (com package.json e app.js) e que as dependências estejam instaladas (npm install). Abaixo, o processo objetivo.

Comando: node app.js ou npm start.

Abra o navegador: http://localhost:8080/tarefas (deve mostrar JSON da lista inicial).
Ou no terminal: curl http://localhost:8080/tarefas (se curl instalado).

Para produção, use npm start.

## Exemplo de JSON que pode ser usado

Para POST e PUT, use body no formato JSON (raw no Postman). Título é obrigatório no POST; campos opcionais no PUT (atualização parcial). Respostas também são JSON.

POST /tarefas (Criar Nova Tarefa):

{
  "titulo": "Tarefa de Exemplo",
  "descricao": "Descrição opcional aqui"
}

PUT /tarefas/:id (Atualizar Tarefa):

{
  "situacao": true,
  "descricao": "Atualizada via API"
}

## Como Testar com o Postman
Você pode usar o Postman para testar todas as rotas da API.

Baixe e Instale: Acesse postman.com e instale a versão desktop (Windows/macOS/Linux). 

Crie uma conta gratuita (opcional, mas útil para salvar coleções).

Abra o Postman: Clique em "New" > "Collection" para criar uma coleção chamada "API Tarefas CRUD".

Configurações Gerais:

Na coleção, vá em "Variables" (aba lateral) e adicione uma variável: baseUrl = http://localhost:8080.

Use {{baseUrl}}/tarefas nas URLs para reutilizar (ex.: {{baseUrl}}/tarefas).

Ative "Pre-request Script" ou "Tests" se quiser automação (opcional para básico).
Configuração Geral para Requisições
  
 Criar uma Requisição: Na coleção, clique em "+" para nova request. Nomeie cada uma (ex.: "GET Listar Tarefas").

Headers Padrão: Na aba "Headers", adicione:

Content-Type: application/json (obrigatório para POST/PUT com body JSON).

Body para POST/PUT: Selecione "Body" > "raw" > "JSON" (no dropdown). Cole o JSON ali.

Enviar Requisição: Clique em "Send". Verifique status (ex.: 200 OK), resposta JSON e tempo.

Salvar: Clique em "Save" para adicionar à coleção.

Testes Passo a Passo para Cada Rota 

Siga esta sequência para um fluxo completo (CRUD). Anote IDs das respostas para usar em PUT/DELETE.

GET /tarefas (Listar Todas as Tarefas):

Método: Selecione "GET".
URL: {{baseUrl}}/tarefas (ou http://localhost:8080/tarefas).
Body: Nenhum (desative).
Clique "Send".
Esperado: Status 200 OK, Resposta: Array JSON com tarefas (ex.: [{"id":"1", "titulo":"1984", ...}]).

POST /tarefas (Criar Nova Tarefa):

Método: "POST".
URL: {{baseUrl}}/tarefas.
Headers: Content-Type: application/json.
Body (raw > JSON):

escreva { "titulo": "sua ideia de titulo"}

e clique em "Send"  que retornara o resultado

PUT /tarefas/:id (Atualizar Tarefa):

Método: "PUT".
URL: {{baseUrl}}/tarefas/1 (substitua "1" pelo ID real da tarefa inicial ou nova do POST).
Headers: Content-Type: application/json.
Body (raw > JSON, parcial OK – só o que quer mudar):

escreva {"situacao": "escolha entre true e false"}
clique em "Send"
retornara o resultado esperado.

DELETE /tarefas/:id (Deletar Tarefa):

Método: "DELETE".
URL: {{baseUrl}}/tarefas/1 (use ID real).
Body: Nenhum.
Clique "Send".
Esperado: Status 200 OK, Resposta: {"message":"Tarefa excluída com sucesso"}.
