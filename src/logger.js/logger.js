const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${level} : ${message}`;
});

const logger = createLogger({
  format: combine(
    format.colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  //   defaultMeta: { service: 'user-service' },
  transports: [new transports.Console()],
});
module.exports = logger;
