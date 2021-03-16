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
        let user=db.users.findOne({
            where:{username:username},
            include:[{association:"role"}]
        }).then((user)=>{
            if( user != undefined && bcrypt.compare(password,user.password)){
                req.session.user=user;
                req.session.shoppingCart=[]
                if(req.body.recordarme != undefined) {
                    res.cookie('recordarme', user.id, {maxAge: 60000});
                    } 
                console.log(user.role.name)           
                if(user.role.name == "admin"){
                    res.redirect('/products')
                }else res.redirect('/')
            }else{
                console.log("no matchea la password", user)
                res.redirect('login')
            }
        }).catch(error =>{
            console.log(error)
            res.redirect('login')
        })
        
    }
    else{
        console.log(errors);
        return res.render('login',{user:req.session.user,errors:errors.errors})
    }
    },
    'logOutUser': function(req,res){
        req.session.user=undefined
        req.session.shoppingCart=undefined
        req.cookies.recordarme=undefined
        res.redirect('/')
    },

    'registerUser':function(req,res){

        let errors = validationResult(req);

        if(errors.isEmpty())
        {

     // creo usuario en la base de datos
        db.users.create({
            username:req.body.username,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            address:"",
            password:req.body.password,
            avatar: "/defaultuser.png",
            roleId:2,
            password : bcrypt.hashSync(req.body.password,10),
        })
        
        .then(()=>{return res.redirect('/');})

        .catch((error)=>
        {
            // muestro errores por consola
            console.log(error);

            // redirigo a pagina principal
            return res.redirect('/',);
        })
        
    }
    else{
// Muestro errores por consola
console.log(errors);

// Retorno vista registro 
return res.render('register',{user:req.session.user,errors:errors.errors})
    }
    },



    'getRegister':function(req, res, next) {
        res.render('register',{user:req.session.user});
    },

    'adminUser':function(req, res) {
        db.users.findAll()
        .then(
            (users)=>{
        res.render('adminUser',{users:users,user:req.session.user});

            }
        )
        .catch(
            // Muestro error por consola
            (error)=>{console.log(error);
            // Redirigo a pagina principal   
                return res.redirect('/');
            })

    },

    'userProfile':function(req, res, next) {
        let user= req.session.user
        if(user == undefined){
            user =db.User.findbyPK(req.params.id)
            .then(
                (result) =>{
                    res.render('profile',{user:result})
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                    res.redirect('/')})
        }
        res.render('profile',{user:user})
    },

    'userEdit': function (req, res) {
        var obj = req.session.user;
        res.render("profileEdit",{obj:obj,user:req.session.user});
    },


'repetir': function (req, res) {
    return true;
},
  'update':(req,res)=>{ 
    let avatar;
    if(req.files[0] != undefined){
        avatar="/"+req.files[0].filename
    }else{
        avatar="/defaultuser.png"
    }

    let user ={
        first_name:req.body.Nombre,
        last_name:req.body.Apellido,
        email:req.body.Email,
        address:req.body.Direccion,
        avatar:avatar
    }
    db.users.update(
        
    user,{where: {
        id:req.session.user.id
    }}).then(result => {
        req.session.user=user
        res.redirect("/users/profile/"+req.session.user.id)})
    .catch(error =>{console.log(error);res.redirect("/")})
    },

}