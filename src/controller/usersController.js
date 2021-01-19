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
        let user=users.find(user => {return user.username == username})
        if(bcrypt.compare(password,user.password)){
            req.session.userLogged=username;

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


        res.render('profile',{users:users, obj:obj });
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
    }  ,

    'userEdit': function (req, res) {
        var obj = req.session.userLogged;
        res.render("profileEdit",{obj:obj});
      },

  'update':(req,res)=>{ 
      var userLogged = req.session.userLogged;

    let Index = users.findIndex(o => o.username === userLogged );
    
        
    users[Index].first_name=req.body.Nombre;
    users[Index].last_name=req.body.Apellido;
    users[Index].email=req.body.Email;
    users[Index].address=req.body.Direccion;
        

    fs.writeFileSync(pathUserJSON,JSON.stringify(users));
    res.redirect('/users/profile')
  },

}