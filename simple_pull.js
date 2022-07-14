const express = require('express');
const app = express();
const PORT = 3000;

const messages = [];

app.use(express.json());

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  console.log(req.body);

  const message = req.body.message;
  messages.push(message);

  res.send('success!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
