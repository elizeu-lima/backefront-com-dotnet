# Frontend do Projeto CRUD

Este é o frontend de uma aplicação web simples que consome uma API CRUD para gerenciar produtos. Ele foi desenvolvido usando HTML, CSS e JavaScript.

## Funcionalidades

- **Listar Produtos**: Exibe todos os produtos cadastrados no banco de dados.
- **Adicionar Produto**: Permite cadastrar um novo produto.
- **Editar Produto**: Permite atualizar os dados de um produto existente.
- **Excluir Produto**: Remove um produto do banco de dados.

## Como Foi Criado

- **HTML**: Estrutura da página, incluindo formulário e lista de produtos.
- **CSS**: Estilização da página, com layout responsivo para dispositivos móveis.
- **JavaScript**: Lógica para consumir a API e manipular os dados.

## Como Executar

1. Certifique-se de que o backend está em execução.
2. Abra a pasta do frontend em um editor de código (como o VS Code).
3. Use uma extensão como o Live Server para servir os arquivos.
4. Acesse `http://127.0.0.1:5500/index.html` no navegador.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Fetch API)

Inicie a API:

bash
Copy
dotnet run
Acesse a documentação da API em https://localhost:5001/swagger.


---

### 4. **README do Repositório no GitHub**

```markdown
# Projeto CRUD com Frontend e Backend

Este repositório contém dois projetos principais: um frontend em HTML, CSS e JavaScript e um backend em .NET 8 com PostgreSQL. Juntos, eles formam uma aplicação CRUD completa para gerenciar produtos.

## Estrutura do Repositório

- **Frontend**: Pasta contendo os arquivos HTML, CSS e JavaScript.
  - **Funcionalidades**: Listar, adicionar, editar e excluir produtos.
  - **Tecnologias**: HTML5, CSS3, JavaScript (Fetch API).
  - **Como Executar**: Use um servidor local (como o Live Server) para servir os arquivos.

- **Backend**: Pasta contendo o projeto .NET com a API.
  - **Funcionalidades**: API RESTful para operações CRUD de produtos.
  - **Tecnologias**: .NET 8, Entity Framework Core, PostgreSQL, Swagger.
  - **Como Executar**: Configure o banco de dados, execute as migrações e inicie a API.

## Detalhes do Projeto

### Frontend

O frontend foi desenvolvido para ser simples e responsivo. Ele consome a API do backend para realizar operações CRUD. O layout foi pensado para funcionar bem em dispositivos móveis e desktops.

### Backend

O backend foi criado com .NET 8 e utiliza Entity Framework Core para se conectar ao PostgreSQL. A API foi projetada para ser escalável e segura, com tratamento de erros e configuração de CORS.

### Desafios

- **Configuração do Banco de Dados**: Garantir que o PostgreSQL estava corretamente configurado e acessível.
- **CORS**: Configurar o backend para permitir requisições do frontend.
- **Tratamento de Erros**: Implementar um middleware para tratar erros de forma adequada.

## Como Executar

1. **Backend**:
   - Configure o PostgreSQL no arquivo `appsettings.json`.
   - Execute as migrações e inicie a API.

2. **Frontend**:
   - Use um servidor local para servir os arquivos.
   - Acesse a aplicação no navegador.

## Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript.
- **Backend**: .NET 8, Entity Framework Core, PostgreSQL, Swagger.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Abra uma issue ou envie um pull request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.