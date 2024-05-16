
# Persistência de Dados: 

No que toca a persistência de dados utilizei o mongoDB.

# Setup da Base de Dados:

## Tratamento do dataset:

Decidi criar uma pasta "datasets" para guardar tudo relativo ao dataset e ao seu respetivo tratamento.

Para converter o csv para o formato json usei um conversor na internet, escolhendo o formato json array, e, de seguida,
alterei o nome do campo "idcontrato" para "_id", sendo mais prático posteriormente quando desenvolver a API de dados.

Além disso, corri o script "script.py" presente na pasta "datasets", onde altero todos os campos que tinham formatos diferentes no mesmo campo para formatos uniformes, no caso, altero tudo para número nos campos "_id", "precoContratual" e "prazoExecucao".

## Docker container e importação do dataset para o mongoDB:

De forma a criar um container que use mongo e importar diretamente o dataset (contratos2024.json) para a base de dados,
corri o script "setup-container.py".

O comando para correr este script, em terminal, foi o seguinte:
```
python setup-container.py contratos contratos .\datasets\contratos2024.json
```
onde ".\datasets\contratos2024.json" é o caminho para o dataset e "contratos" é tanto o nome da base de dados como nome
da coleção.

A importação do ficheiro para a base de dados é feita dentro do script, com recurso ao comando:
```
mongoimport -d contratos -c contratos --file /datasets/contratos2024.json --jsonArray
```

## Respostas Textuais

Resposta às queries na pasta ex1, ficheiro "queries.txt"

## Escolhas feitas

Na rota "GET /contratos?entidade=EEEE", escolhi fazer a procura pelo campo "NIPC_entidade_comunicante", visto que é um identificador único da entidade.

De forma a garantir que todos os packages instalados eram guardados no ficheiro "package.json", instalei todos da seguinte maneira:
```
npm install package_name --save
```
onde a tag "--save" guarda o package no ficheiro "package.json".

### EX1:

Na criação da API executei os seguintes comandos:
    1. npx express-generator --no-view ex1
    2. cd ex1
    3. npm install --save
    4. npm install mongoose --save 

Para executar a API:
    npm start

Para a construção da API de dados fiz o seguinte:

    1. Alterei a porta de entrada para 16000, tal como pedido no enunciado (no ficheiro www da pasta bin)
    2. Adicionei código no ficheiro app.js para fazer a conexão com o mongodb
    3. Criei as pastas models e controllers
    4. Criei o model do contrato, schema idêntico ao do json
    5. Criei o controller contrato.js, onde estão todas as operações CRUD pedidas no enunciado
    6. Para a route, apenas alterei a index.js, onde atualizei as rotas e utilizei o controller desenvolvido
    7. Testei as rotas com recurso á aplicação "Postman"

### EX2

Para a interface, comecei por executar os seguintes comandos:
    1. npx express-generator --view=pug ex2
    2. cd ex2
    3. npm install --save
    4. npm install axios --save 

Para executar a aplicação:
    npm start

É de mencionar que, de maneira a correr com sucesso a aplicação do ex2, é preciso ter a correr a nossa API de dados (ex1)

Construção da interface:

    1. Alterei a porta de entrada para 16001 (no ficheiro www da pasta bin)
    2. No ficheiro index.js da pasta routes, com recurso ao axios, fiz a comunicação com a API de dados e, depois de criar
os ficheiros pug necessários, passei para os mesmos a resposta obtida depois dessa mesma comunicação.

# Uso da aplicação

Na diretoria do ex1: 
    -npm install para instalar todas as dependências
    -executar "npm start"

Na diretoria do ex2 
    -npm install para instalar todas as dependências
    -executar "npm start"

Abrir "http://localhost:16001/" para testar a interface.
Abrir o "Postman" para testar a API de dados (utilizar porta 16000).