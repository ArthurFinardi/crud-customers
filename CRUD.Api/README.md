# CRUD Customer API

## English

### Overview
This is a .NET 8.0+ API project implementing a Customer CRUD system using Domain-Driven Design (DDD) principles, CQRS pattern, and Event Sourcing.

### Technologies Used
- .NET 8.0
- SQL Server
- CQRS Pattern
- Event Sourcing
- FluentValidation
- DDD (Domain-Driven Design)
- Docker

### Project Structure
- **CRUD.Api**: API layer with controllers and endpoints
- **CRUD.Application**: Application layer with CQRS commands and queries
- **CRUD.Domain**: Domain layer with entities and business rules
- **CRUD.Infrastructure**: Infrastructure layer with database context and repositories

### Features
- Customer registration with validation
- Unique CPF/CNPJ and email validation
- Age validation for physical persons (minimum 18 years)
- IE (Inscrição Estadual) validation for legal entities
- Address management
- Comprehensive validation on both frontend and backend

### Running the Project
1. Using Docker:
```bash
docker-compose up
```

2. Local Development:
```bash
dotnet restore
dotnet build
dotnet run
```

### API Endpoints
- POST /api/customers - Create customer
- GET /api/customers - List all customers
- GET /api/customers/{id} - Get customer by ID
- PUT /api/customers/{id} - Update customer
- DELETE /api/customers/{id} - Delete customer

---

## Português

### Visão Geral
Este é um projeto de API .NET 8.0+ implementando um sistema CRUD de Clientes utilizando princípios de Domain-Driven Design (DDD), padrão CQRS e Event Sourcing.

### Tecnologias Utilizadas
- .NET 8.0
- SQL Server
- Padrão CQRS
- Event Sourcing
- FluentValidation
- DDD (Domain-Driven Design)
- Docker

### Estrutura do Projeto
- **CRUD.Api**: Camada de API com controllers e endpoints
- **CRUD.Application**: Camada de aplicação com comandos e queries CQRS
- **CRUD.Domain**: Camada de domínio com entidades e regras de negócio
- **CRUD.Infrastructure**: Camada de infraestrutura com contexto de banco de dados e repositórios

### Funcionalidades
- Cadastro de clientes com validação
- Validação de CPF/CNPJ e email únicos
- Validação de idade para pessoas físicas (mínimo 18 anos)
- Validação de IE (Inscrição Estadual) para pessoas jurídicas
- Gerenciamento de endereços
- Validação abrangente tanto no frontend quanto no backend

### Executando o Projeto
1. Usando Docker:
```bash
docker-compose up
```

2. Desenvolvimento Local:
```bash
dotnet restore
dotnet build
dotnet run
```

### Endpoints da API
- POST /api/customers - Criar cliente
- GET /api/customers - Listar todos os clientes
- GET /api/customers/{id} - Obter cliente por ID
- PUT /api/customers/{id} - Atualizar cliente
- DELETE /api/customers/{id} - Deletar cliente 