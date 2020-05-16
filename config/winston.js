const winston = require("winston");
require("winston-daily-rotate-file");
const appRoot = require('app-root-path');

var transport = new winston.transports.DailyRotateFile({
  filename: "application-%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  dirname: `${appRoot}/logs/`,
  level: 'info',
  handleExceptions: true,
  colorize: true,
  json: false,
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

transport.on("rotate", function (oldFilename, newFilename) {
  logger.info("DAILY LOGGER ROTATE");
});

const logger = winston.createLogger({
  transports: [
      transport
    // new winston.transports.Console({
    //   json: true,
    //   colorize: true,
    // }),
  ],
  exitOnError: false,
});

logger.info("App Name : " + process);

logger.stream = {
  write: function (message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;
