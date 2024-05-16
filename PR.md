
# Persistência de Dados: 

No que toca a persistência de dados utilizei o mongoDB.

# Setup da Base de Dados:

## Tratamento do dataset:

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

## Respostas Textuais

Resposta às queries na pasta ex1, ficheiro "queries.txt"

## Escolhas feitas

Na rota "GET /contratos?entidade=EEEE", escolhi fazer a procura pelo campo "NIPC_entidade_comunicante", visto que é um identificador único da entidade.