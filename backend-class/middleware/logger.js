

/**
 * module.exports = logger;
 * let users = []

module.exports = users;
 */

const logger = (req , res , next) => {
    console.log(`${req.method} Request Recived`);
    next();
}

module.exports = logger;