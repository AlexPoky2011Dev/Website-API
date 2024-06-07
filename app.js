const express = require('express');
const cors = require('cors');
const PORT = 40004;
const logger = require('./src/utils/logger');
const config = require('./src/config.json');

const app = express();
app.use(logger);
app.use(config);
app.use(cors());


console.log('\x1b[33m● \x1b[0mStarting server...');

app.listen(
    PORT,
    () => console.log(`\x1b[32m● \x1b[0mOnline: \x1b[4mhttp://localhost:${PORT} \x1b[0m`)
);


app.get('/portfolio', (req, res) => {
  const projects = [
    {
      id: 2,
      image: 'https://yt3.googleusercontent.com/DQKHWL4ZSGJdb_XOc3MjWQrLwDuUwdmqTp7BKahvdTYEazfp0PqRF79eaHbsCPhPyGecLjL9UsM=s900-c-k-c0x00ffffff-no-rj',
      name: 'Kaicenat Rizz',
      language: 'TypeScript',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      date: '30.4.2024',
      url: 'https://alexpoky2011.fun'
    },
    {
      id: 1,
      image: 'http://localhost:5173/portfolio.png',
      name: 'AlexPoky2011',
      language: 'TypeScript',
      description: 'Moje vlastní webová stránka, kde je mé portfolio a nějaké informace o mně.',
      date: '30.4.2024',
      url: 'https://alexpoky2011.fun'
    },

  ];
  res.json(projects);
});