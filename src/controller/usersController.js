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
        res.render('login',{user:req.session.user});
    },
    'logInUser': function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        let user=users.find(user => {return user.username == username})
        if(bcrypt.compare(password,user.password)){
            req.session.user=user;

            if(user.role === "admin"){
                res.redirect('/products')
            }else res.redirect('/')
        }else{
            res.redirect('login')
        }
    },
    'logOutUser': function(req,res){
        req.session.user=undefined
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
        res.render('register',{user:req.session.user});
    },

    'adminUser':function(req, res, next) {
        res.render('adminUser',{users:users,user:req.session.user});
    },

    'userProfile':function(req, res, next) {
        res.render('profile',{users:users, obj:req.session.user ,user:req.session.user});
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
        var obj = req.session.user;
        res.render("profileEdit",{obj:obj});
      },

  'update':(req,res)=>{ 
      let user = req.session.user.username;

    let Index = users.findIndex(o => o.username === user );
    
        
    users[Index].first_name=req.body.Nombre;
    users[Index].last_name=req.body.Apellido;
    users[Index].email=req.body.Email;
    users[Index].address=req.body.Direccion;
        

    fs.writeFileSync(pathUserJSON,JSON.stringify(users));
    res.redirect('/users/profile')
  },

}