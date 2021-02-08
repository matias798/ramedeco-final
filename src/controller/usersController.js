const users =require('../data/users.json')
const fs =require('fs')
const bcrypt=require('bcrypt')
const {check,validationResult,body}= require('express-validator')
const db=require('../database/models')

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
        let user =req.session.user || undefined
        console.log("user",user)
        res.render('login',{user:user});

    },
    'logInUser': function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        let errors = validationResult(req);
        if(errors.isEmpty()){
        let user=users.find(user => {return user.username == username})
        if(bcrypt.compare(password,user.password)){
            req.session.user=user;

            if(req.body.recordarme != undefined) {
                res.cookie('recordarme', user.id, {maxAge: 60000});
                }            

            if(user.role === "admin"){
                res.redirect('/products')
            }else res.redirect('/')
        }else{
            res.redirect('login')
        }
    }
    else{
        console.log(errors);
        return res.render('login',{user:req.session.user,errors:errors.errors})
    }
    },
    'logOutUser': function(req,res){
        req.session.user=undefined
        req.cookies.recordarme=undefined
        res.redirect('/')
    },
    'registerUser':function(req,res){

        db.users.create({
            username:req.body.username,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:req.body.password,
            address:req.body.Direccion,
            avatar: "/defaultuser",
            role_id:"2",
            password : bcrypt.hashSync(req.body.password,10),

        })
        
        .then((users)=>{

            let errors = validationResult(req);
            if(errors.isEmpty())
            {
            console.log(req.body)
            return res.redirect('/');
            }
            else{
        // Muestro errores por consola
       console.log(errors);
        
        // Retorno vista registro 
        return res.render('register',{users:req.session.user,errors:errors.errors})
            }

        })

        .catch(
            (error)=>{console.log(error);}
        )
        
    },
    'getRegister':function(req, res, next) {
        res.render('register',{user:req.session.user});
    },

    'adminUser':function(req, res, next) {
        res.render('adminUser',{users:users,user:req.session.user});
    },

    'userProfile':function(req, res, next) {
        let user= req.session.user
        if(user == undefined){
            user =db.User.findbyPK(req.params.id)
        }
        res.render('profile',{user:user})
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
        res.render("profileEdit",{obj:obj,user:req.session.user});
      },

  'update':(req,res)=>{ 
      let user = req.session.user.username;

    let index = users.findIndex(o => o.username === user );
    
        
    users[index].first_name=req.body.Nombre;
    users[index].last_name=req.body.Apellido;
    users[index].email=req.body.Email;
    users[index].address=req.body.Direccion;
    if(req.files[0] != undefined){
        users[index].avatar="/"+req.files[0].filename
    }else{
        users[index].avatar="/defaultuser.png"
        console.log("users[index].avatar" + users[index].avatar)
    }
        
    req.session.user=users[index]
    fs.writeFileSync(pathUserJSON,JSON.stringify(users));
    let pathToRedirect='/users/profile/'+users[index].id
    res.redirect(pathToRedirect)
    },

}