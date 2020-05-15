const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true,
        })
    ]
});
// const logger = new (winston.Logger)({
//     transports: [
//         new (winston.transports.Console)({
//             json: true,
//             colorize: true,
//         }),
//     ],
// });

exports.logger = logger;
