//implementación de cookies
//este middleware es global, lo requiero en app.js

const fs = require('fs');
const path = require('path');
let pathUserJSON = path.resolve(__dirname,"..","data/users.json")

function recordarmeMiddleware(req,res,next){

    let usersJSON = fs.readFileSync(pathUserJSON,{encoding:'utf-8'});
    let users
    if(usersJSON == " "){
        users = [];
        }else{
            users = JSON.parse(usersJSON);
        }
    let username
    for(let i = 0; i<users.length;i++){
        if(users[i].email == req.cookies.recordarme){
            username = users[i]
            break;
        }
    }
    req.session.userLogged=username;

    next();

}

module.exports = recordarmeMiddleware;