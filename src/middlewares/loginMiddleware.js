//este middleware es local, lo voy a requerir solo en las rutas en las que haga falta

function loginMiddleware(req,res,next){

    next();

}

module.exports = loginMiddleware;