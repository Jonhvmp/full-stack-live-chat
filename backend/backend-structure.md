```chat-live-backend/
├── src/
│   ├── config/              # Configurações gerais (variáveis de ambiente, conexão com o MongoDB, Redis, etc.)
│   ├── controllers/         # Controladores das rotas REST
│   ├── models/              # Schemas e modelos do Mongoose
│   ├── routes/              # Definição das rotas HTTP e, futuramente, as de WebSocket
│   ├── services/            # Lógica de negócio e serviços auxiliares
│   ├── middlewares/         # Middlewares de autenticação, validação e segurança
│   ├── sockets/             # Configuração e eventos do Socket.io
│   ├── utils/               # Funções utilitárias e helpers
│   ├── tests/               # Testes unitários e de integração
│   └── app.ts               # Arquivo principal para bootstrap do Express
├── .env                     # Variáveis de ambiente
├── package.json             # Dependências e scripts do Node.js
├── tsconfig.json            # Configurações do TypeScript
├── swagger.yaml             # Documentação da API (Swagger/OpenAPI)
└── Dockerfile               # Arquivo para containerização com Docker
```
