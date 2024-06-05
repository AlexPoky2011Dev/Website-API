const express = require('express');
const cors = require('cors');
const PORT = 40004;
const logger = require('./src/utils/logger');

const app = express(); // Initialize app here
app.use(logger); // Now you can use app
app.use(cors());

console.log('\x1b[33m● \x1b[0mStarting server...');

process.on('SIGTERM', () => {
  console.log('\x1b[31m● \x1bOffline');
  process.exit(0);
});

app.listen(
    PORT,
    () => console.log(`\x1b[32m● \x1b[0mOnline: \x1b[4mhttp://localhost:${PORT} \x1b[0m`)
);

app.get('/portfolio', (req, res) => {
    const projects = [
      {
        id: 2,
        image: 'http://localhost:5173/portfolio.png',
        name: 'AlexPoky2011',
        language: 'TypeScript',
        description: 'Test Skibidy toilet kaicenat rizz',
        date: '30.4.2024',
        url: 'https://alexpoky2011.fun'
      },
      {
        id: 1,
        image: 'http://localhost:5173/portfolio.png',
        name: 'AlexPoky2011',
        language: 'TypeScript',
        description: 'Test Skibidy toilet kaicenat rizz',
        date: '30.4.2024',
        url: 'https://alexpoky2011.fun'
      },

    ];
    res.json(projects);
  });