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
        res.render("profileEdit");
      },

  'update':(req,res)=>{
    product.tittle=req.body.tittle,
    product.category=req.body.category
    product.summary=req.body.summary
    product.description=req.body.description
    product.price=req.body.price
    product.product_detail=req.body.product_detail
    product.dimension=req.body.dimension

    for (let i=0;i<req.files.length;i++) {
      if(i == 0 ){
        product.main_image=req.files[i].filename
      }else{
        product.images.push(req.files[i].filename)
      }
    }
    fs.writeFileSync(pathProductJSON, JSON.stringify(products))
    res.redirect('/users/profile')
  },

}