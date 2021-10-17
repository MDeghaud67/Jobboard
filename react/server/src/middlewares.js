const jwt = require("jsonwebtoken");
const catchErrors = (fn) => (req, res, next) => fn(req, res, next).catch(next);

function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}

function errorHandler(err, req, res, next) {
    let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    if (err.name === "ValidationError") {
        let errors = {};

        Object.keys(err.errors).forEach((key) => {
            errors[key] = err.errors[key].message;
        });
        err.message = errors;
    }
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
}

function checkToken(req, res, next) {
    const authHeader = req.get("Authorization");
    const error = new Error("Bad token");

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        if (token) {
            jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
                if (err) {
                    res.status(401);
                    throw error;
                }
                req.user = user;
                next();
            })
        } else {
            res.status(401);
            throw error;
        }
    } else {
        res.status(401);
        throw error;
    }
}


function hasAdminRight(req, res, next) {
    if (req.user && req.user.isAdmin) {
        return next();
    }
    const err = new Error("Bad token");
    res.status(401);
    throw err;
}




module.exports = {
    notFound,
    errorHandler,
    catchErrors,
    checkToken,
    hasAdminRight
};