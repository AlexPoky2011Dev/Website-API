const express = require('express');
const cors = require('cors');
const PORT = 40004;

const app = express();
console.log('\x1b[33m● \x1b[0mStarting server...');

app.listen(
    PORT,
    () => console.log(`\x1b[32m● \x1b[0mOnline: \x1b[4mhttp://localhost:${PORT} \x1b[0m`)
);

//sem linej  








