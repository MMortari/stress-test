const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(cors());
server.use(morgan('dev'));

async function createPromise() {
  const timeout = parseInt(Math.random() * 1234);

  await new Promise((res) => {
    setTimeout(() => {
      res(null);
    }, timeout);
  });

  return timeout;
}

server.get('/', async (req, res) => {
  return res.status(200).json({ okay: true });
});

server.get('/promise', async (req, res) => {
  const timeout = await createPromise();

  return res.status(200).json({ okay: true, timeout });
});

server.get('/cpu', async (req, res) => {
  const for_size = 100;

  for (let i = 0; i < for_size; i++) {
    console.log(i);
  }

  return res.status(200).json({ okay: true, for_size });
});

server.listen('3333', () => console.log('Server runnig'));
