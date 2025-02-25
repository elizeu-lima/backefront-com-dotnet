# Backend do Projeto CRUD

Este é o backend de uma API RESTful desenvolvida em .NET 8, responsável por gerenciar operações CRUD (Create, Read, Update, Delete) de produtos. Ele utiliza Entity Framework Core para se conectar a um banco de dados PostgreSQL.

## Funcionalidades

- **Listar Produtos**: Retorna todos os produtos cadastrados.
- **Obter Produto por ID**: Retorna os detalhes de um produto específico.
- **Adicionar Produto**: Cadastra um novo produto.
- **Atualizar Produto**: Atualiza os dados de um produto existente.
- **Excluir Produto**: Remove um produto do banco de dados.

## Como Foi Pensado

O backend foi desenvolvido com foco em:
- **Simplicidade**: Uma API fácil de entender e manter.
- **Escalabilidade**: Pronto para adicionar novas funcionalidades.
- **Segurança**: Configuração de CORS para permitir requisições apenas do frontend.

## Desafios Enfrentados

1. **Configuração do PostgreSQL**:
   - Garantir que o banco de dados estava corretamente configurado e acessível.
   - Resolver problemas de migrações e criação de tabelas.

2. **CORS**:
   - Configurar o backend para permitir requisições do frontend sem problemas de CORS.

3. **Tratamento de Erros**:
   - Implementar um middleware para tratar erros e retornar respostas adequadas.

## Tecnologias Utilizadas

- **.NET 8**: Framework para desenvolvimento de APIs.
- **Entity Framework Core**: ORM para acesso ao banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **Swagger**: Documentação automática da API.

## Arquitetura

- **Controllers**: Responsáveis por receber requisições e retornar respostas.
- **Models**: Representam as entidades do banco de dados (por exemplo, `Produto`).
- **DbContext**: Configuração do banco de dados e migrações.
- **Middleware**: Tratamento de erros e configuração de CORS.

## Como Executar

1. Configure a string de conexão com o PostgreSQL no arquivo `appsettings.json`.
2. Execute as migrações para criar o banco de dados:
   ```bash
   dotnet ef database update