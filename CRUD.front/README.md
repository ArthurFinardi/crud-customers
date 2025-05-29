# CRUD Customer Frontend

## English

### Overview
This is an Angular-based frontend application for the Customer Management System. It provides a user-friendly interface for managing customer data with comprehensive validation and a modern UI design.

### Technologies Used
- Angular 17+
- TypeScript
- Angular Material
- RxJS
- Docker
- Nginx

### Features
- Responsive design
- Form validation
- Customer data management
- Address management
- CPF/CNPJ validation
- Age validation for physical persons
- IE validation for legal entities
- Real-time form validation
- Error handling and user feedback

### Project Structure
- **src/app/components**: Reusable UI components
- **src/app/services**: API services and data handling
- **src/app/models**: TypeScript interfaces and models
- **src/app/validators**: Custom form validators
- **src/app/pages**: Main application pages

### Running the Project
1. Using Docker:
```bash
docker-compose up
```

2. Local Development:
```bash
npm install
ng serve
```

### Development Server
Navigate to `http://localhost:4200/` to access the application.

### Building for Production
```bash
ng build --prod
```

---

## Português

### Visão Geral
Este é um aplicativo frontend baseado em Angular para o Sistema de Gerenciamento de Clientes. Ele fornece uma interface amigável para gerenciar dados de clientes com validação abrangente e design moderno.

### Tecnologias Utilizadas
- Angular 17+
- TypeScript
- Angular Material
- RxJS
- Docker
- Nginx

### Funcionalidades
- Design responsivo
- Validação de formulários
- Gerenciamento de dados de clientes
- Gerenciamento de endereços
- Validação de CPF/CNPJ
- Validação de idade para pessoas físicas
- Validação de IE para pessoas jurídicas
- Validação de formulário em tempo real
- Tratamento de erros e feedback ao usuário

### Estrutura do Projeto
- **src/app/components**: Componentes UI reutilizáveis
- **src/app/services**: Serviços de API e manipulação de dados
- **src/app/models**: Interfaces e modelos TypeScript
- **src/app/validators**: Validadores de formulário personalizados
- **src/app/pages**: Páginas principais da aplicação

### Executando o Projeto
1. Usando Docker:
```bash
docker-compose up
```

2. Desenvolvimento Local:
```bash
npm install
ng serve
```

### Servidor de Desenvolvimento
Navegue até `http://localhost:4200/` para acessar a aplicação.

### Construindo para Produção
```bash
ng build --prod
```
