const express = require('express')
const app = express()

app.listen(3000,"Server Started Successfully")

app.get("/home", (req,res) =>{
    res.sendFile(__dirname+"/views/home.html") 
})
/*
app.get("/login", (req,res) =>{
    res.sendFile(__dirname+"/views/login.html") 
})

app.get("/register", (req,res) =>{
    res.sendFile(__dirname+"/views/register.html") 
})

app.get("/shoppingcart", (req,res) =>{
    res.sendFile(__dirname+"/views/shoppingcart.html") 
})

app.get("/product_deail", (req,res) =>{
    res.sendFile(__dirname+"/views/product_deail.html") 
})
*/
app.get("*", (req,res) =>{
    res.sendFile(__dirname+"/../public/" +req.url ) 
})
