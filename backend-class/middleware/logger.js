const logger = (req, res, next) => {
    console.log("Middleware Activated ")
    next();
}

module.exports = logger;