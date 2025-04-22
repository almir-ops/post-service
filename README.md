# 📝 Post Management Microservice

Este microsserviço é responsável pelo gerenciamento de posts em um sistema de blogging. Ele permite criar, listar, atualizar e deletar publicações, sempre utilizando autenticação via JWT para proteger as rotas.

---

## 🧱 Arquitetura

Este projeto segue os princípios da **Clean Architecture**, sendo dividido nas seguintes camadas:

- `domain`: Definições de entidades e regras de negócio puras
- `usecases`: Casos de uso que encapsulam a lógica de aplicação (ex: criar, listar posts)
- `infra`: Implementações específicas de infraestrutura (ORM Sequelize, acesso a banco)
- `interface`: Camada de entrada com controllers, rotas e middlewares (ex: autenticação)
- `main`: Arquivo principal de inicialização da aplicação

---

## 🔐 Autenticação

Todas as rotas são protegidas. É necessário fornecer um token JWT válido no cabeçalho da requisição:


---

## 📡 Rotas Disponíveis

### ➕ Criar Post

**POST** `/posts`

**Body:**

```json
{
  "title": "Título do post",
  "content": "Conteúdo do post",
  "authorId": 1
}

## 📡 Rotas Disponíveis

### ➕ Criar Post

**POST** `/posts`

**Body:**

```json
{
  "title": "Título do post",
  "content": "Conteúdo do post",
  "authorId": 1
}




