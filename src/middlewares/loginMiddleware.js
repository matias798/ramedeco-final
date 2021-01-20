//este middleware es local, lo voy a requerir solo en las rutas en las que haga falta

function loginMiddleware(req,res,next){
    if(req.session.user == undefined){
        res.render('login');
    }else{
            next();
        }        
}

module.exports = loginMiddleware;