# Customer Management System

## English

### Overview
This is a complete Customer Management System built with Angular frontend and .NET 8 backend, implementing DDD principles, CQRS pattern, and Event Sourcing.

### System Architecture
- Frontend: Angular 17+ with Angular Material
- Backend: .NET 8.0+ API
- Database: SQL Server
- Containerization: Docker & Docker Compose

### Features
- Customer registration and management
- Support for both individual and corporate customers
- Comprehensive validation rules
- Address management
- Modern and responsive UI
- RESTful API
- Docker support for easy deployment

### Prerequisites
- Docker and Docker Compose
- .NET 8.0 SDK (for local development)
- Node.js and npm (for local frontend development)

### Quick Start
1. Clone the repository
2. Navigate to the project root
3. Run one of the following commands:

```bash
# Run all services
docker-compose up

# Run specific services
docker-compose --profile db up        # Run only database
docker-compose --profile api up       # Run only API
docker-compose --profile frontend up  # Run only frontend
```

4. Access the application:
   - Frontend: http://localhost:4200
   - API: http://localhost:5000
   - Database: localhost:1433

### Project Structure
```
.
├── CRUD.Api/           # Backend API
├── CRUD.front/         # Frontend Application
├── docker-compose.yml  # Docker configuration
└── README.md          # This file
```

### Development
For detailed development instructions, please refer to the README files in each project directory:
- [Backend Documentation](CRUD.Api/README.md)
- [Frontend Documentation](CRUD.front/README.md)

### Docker Configuration
The project uses a single docker-compose.yml file in the root directory to manage all services. The configuration includes:
- Health checks for all services
- Proper service dependencies
- Development environment settings
- Volume management for database persistence

---

## Português

### Visão Geral
Este é um Sistema Completo de Gerenciamento de Clientes construído com frontend Angular e backend .NET 8, implementando princípios DDD, padrão CQRS e Event Sourcing.

### Arquitetura do Sistema
- Frontend: Angular 17+ com Angular Material
- Backend: API .NET 8.0+
- Banco de Dados: SQL Server
- Containerização: Docker & Docker Compose

### Funcionalidades
- Cadastro e gerenciamento de clientes
- Suporte para clientes pessoa física e jurídica
- Regras de validação abrangentes
- Gerenciamento de endereços
- Interface moderna e responsiva
- API RESTful
- Suporte a Docker para fácil implantação

### Pré-requisitos
- Docker e Docker Compose
- .NET 8.0 SDK (para desenvolvimento local)
- Node.js e npm (para desenvolvimento local do frontend)

### Início Rápido
1. Clone o repositório
2. Navegue até a raiz do projeto
3. Execute um dos seguintes comandos:

```bash
# Executar todos os serviços
docker-compose up

# Executar serviços específicos
docker-compose --profile db up        # Executar apenas o banco de dados
docker-compose --profile api up       # Executar apenas a API
docker-compose --profile frontend up  # Executar apenas o frontend
```

4. Acesse a aplicação:
   - Frontend: http://localhost:4200
   - API: http://localhost:5000
   - Banco de Dados: localhost:1433

### Estrutura do Projeto
```
.
├── CRUD.Api/           # API Backend
├── CRUD.front/         # Aplicação Frontend
├── docker-compose.yml  # Configuração Docker
└── README.md          # Este arquivo
```

### Desenvolvimento
Para instruções detalhadas de desenvolvimento, consulte os arquivos README em cada diretório do projeto:
- [Documentação do Backend](CRUD.Api/README.md)
- [Documentação do Frontend](CRUD.front/README.md)

### Configuração Docker
O projeto utiliza um único arquivo docker-compose.yml no diretório raiz para gerenciar todos os serviços. A configuração inclui:
- Health checks para todos os serviços
- Dependências adequadas entre serviços
- Configurações de ambiente de desenvolvimento
- Gerenciamento de volumes para persistência do banco de dados 