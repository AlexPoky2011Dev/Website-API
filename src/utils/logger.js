const fs = require('fs');
const logger = (req, res, next) => {
  const ipAddress = req.ip;
  const timestamp = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  const logMessage = `[INFO] ${ipAddress} - ${timestamp}\n`;
  fs.appendFile('./src/logs.txt', logMessage, (err) => {
    if (err) {
      console.error(err);
    }
  });
  next();
};




module.exports = logger;