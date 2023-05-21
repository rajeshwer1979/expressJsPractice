const moment = require('moment')  // moment calling

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
   console.log('hello')
    next();
}

module.exports = logger;