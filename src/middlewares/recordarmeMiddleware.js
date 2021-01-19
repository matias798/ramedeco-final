//implementación de cookies
//este middleware es global, lo requiero en app.js

function recordarmeMiddleware(req,res,next){
    

    next();

}

module.exports = recordarmeMiddleware;