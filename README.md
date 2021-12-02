## Descrição

Projeto criado para resolução do desafio do processo seletivo da Facile.

Uma API REST simples, onde é possível cadastrar uma string e resgatá-la. A string é salva no banco de dados encriptada.
Apenas para fins de resolução do desafio, o algoritmo utilizado na encriptação foi o ROT-13, utilizando apenas as letras presentes na tabela ASCII.

## Instalação

```bash
$ npm install
```

## Configuração para conexão com o banco de dados

É necessário configurar o `.env` para se conectar ao banco de dados com os seguintes dados.

```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=                         #Host do postgres
TYPEORM_PORT=                         #Porta do posgres
TYPEORM_USERNAME=                     #Username do postgres
TYPEORM_PASSWORD=                     #Senha do postgres
TYPEORM_DATABASE=                     #Nome do banco de dados
TYPEORM_ENTITIES=dist/**/*.entity.js
TYPEORM_MIGRATIONS=dist/migrations/*.js
TYPEORM_MIGRATIONS_RUN=true
```

Após `.env` configurado, rodar migrations para criação de tabelas no banco de dados.

```bash
$ typeorm migration:run

```

## Executando o projeto

```bash
# Desenvolvimento
$ npm run start

# Desenvolvimento com Hot Reloading
$ npm run start:dev
```

O serviço estará disponível na porta `3000`.

## Rotas

* `POST` */encripts*: 
Cadastra uma string.
Body:
```
{
  "name": string
}
```

* `GET` */encripts/:id*
Resgata a string de dado `id`
