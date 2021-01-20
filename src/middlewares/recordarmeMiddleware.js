
//implementación de cookies
//este middleware es global, lo requiero en app.js
const users =require('../data/users.json')

function recordarmeMiddleware(req,res,next){

    if(req.cookies['recordarme']!=undefined){
    let user
    for(let i = 0; i<users.length;i++){
        if(users[i].id == req.cookies.recordarme){
            user = users[i]
            break;
        }
    }
    req.session.user=user;
    }
    next();

}

module.exports = recordarmeMiddleware;