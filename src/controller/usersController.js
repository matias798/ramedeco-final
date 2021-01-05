const users =require('../data/users.json')
const fs =require('fs')
const user ={
    "id": -1,
    "first_name": "",
    "last_name": "",
    "email": "",
    "address": "",
    "password": "",
    "username": "",
    "role": "user"
}

module.exports={
    'getLogin':function(req, res, next) {
        res.render('login');
    },
    'logInUser': function(req,res){
        let username=req.body.username
        let password=req.body.password
        let user=users.find(user => {return user.username == username || user.email == username})
        if(user.password===password){
            res.redirect('/')
        }else{
            res.redirect('login')
        }
    },
    'logOutUser': function(req,res){

    },
    'registerUser':function(req,res){
        let user ={...user,...req.body}
        users.push(user)
        fs.writeFileSync('../data/users.json',users)
    },
    'getRegister':function(req, res, next) {
        res.render('register');
    }
}