import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import dotenv from 'dotenv';
import nodemon from 'nodemon';

// Configura variáveis de ambiente
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.BASE_URL,
    methods: ["GET", "POST"]
  }
});

// Middlewares
app.use(express.json());

// Rotas de exemplo (adicione seus endpoints conforme necessário)
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Taskify Backend!');
});

// Configuração do Socket.io
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  // Evento para entrar em uma conversa
  socket.on('joinConversation', ({ conversationId }) => {
    socket.join(conversationId);
    console.log(`Socket ${socket.id} entrou na conversa ${conversationId}`);
  });

  // Evento para envio de mensagem
  socket.on('sendMessage', ({ conversationId, content }) => {
    // Aqui você pode salvar a mensagem no MongoDB, por exemplo.
    // Em seguida, emita o evento para os outros clientes na sala.
    io.to(conversationId).emit('messageReceived', { conversationId, content, senderId: socket.id });
  });
});

// Inicializando o servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost/${PORT}`);
});

export default app;
