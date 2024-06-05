const fs = require('fs');
const logger = (req, res, next) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.ip;
  const date = new Date();
  const timestamp = date.toLocaleTimeString('cs-CZ', {
    timeZone: 'Europe/Prague',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });
  const dateString = date.toLocaleDateString('cs-CZ', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const logMessage = `[INFO] ${ipAddress} - ${dateString} ${timestamp}\n`;
  fs.appendFile('./src/dir/logs.txt', logMessage, (err) => {
    if (err) {
      console.error(err);
    }
  });
  next();
};

module.exports = logger;