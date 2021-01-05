const users =require('../data/users.json')
const fs =require('fs')
const user_template ={
    "first_name": "",
    "last_name": "",
    "email": "",
    "address": "",
    "password": "",
    "username": "",
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
            if(user.role === "admin"){
                res.redirect('/admin')
            }else res.redirect('/')
        }else{
            res.redirect('login')
        }
    },
    'logOutUser': function(req,res){
        res.redirect('/')
    },
    'registerUser':function(req,res){
        console.log(req.body)
        let user = {...user_template,...req.body}
        user.role="user"        
        user.id=users[users.length-1].id +1
        users.push(user)
        fs.writeFileSync('../data/users.json',users)
    },
    'getRegister':function(req, res, next) {
        res.render('register');
    }
}