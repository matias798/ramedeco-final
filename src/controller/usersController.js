const users =require('../data/users.json')
const fs =require('fs')
const bcrypt=require('bcrypt')

const user_template ={
    "first_name": "",
    "last_name": "",
    "email": "",
    "address": "",
    "password": "",
    "username": "",
}
var path = require('path');
let pathUserJSON=path.resolve(__dirname,"..","data/users.json")

module.exports={
    'getLogin':function(req, res, next) {
        res.render('login');
    },
    'logInUser': function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        req.session.userLogged=username;
        let user=users.find(user => {return user.username == username})
        if(bcrypt.compare(password,user.password)){
            if(user.role === "admin"){
                res.redirect('/products')
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
        user.password=bcrypt.hashSync(user.password,10)
        users.push(user)
        fs.writeFileSync(pathUserJSON,JSON.stringify(users))
        res.redirect('/')
    },
    'getRegister':function(req, res, next) {
        res.render('register');
    },

    'adminUser':function(req, res, next) {
        res.render('adminUser',{users:users});
    },

    'userProfile':function(req, res, next) {
       var userLogged = req.session.userLogged;

       let obj = users.find(o => o.username === userLogged );

       console.log(obj);

        res.render('profile',{users:users});
    },
    'editUser':function(req,res){
        console.log(req.body)
        let user = {...user_template,...req.body}
        user.role="user"        
        user.id=users[users.length-1].id +1
        user.password=bcrypt.hashSync(user.password,10)
        user.avatar = req.files[0].filename
        users.push(user)
        fs.writeFileSync(pathUserJSON,JSON.stringify(users))
        res.redirect('/')
    } 

}