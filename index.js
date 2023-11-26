const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Server is Up' });
});

app.get('/outra-rota', (request, response) => {
  return response.json({ message: 'Atualizou mesmo!' });
});

app.post('/teste', (request, response) => {
  const { name, date } = request.body;
  return response.json({ name, date });
});

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
