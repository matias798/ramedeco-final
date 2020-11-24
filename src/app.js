const express = require('express')
const app = express()
const port=3000;

app.listen(port,()=>console.log("server started at Port: "+port))

app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/views/home.html") 
})

app.get("/login", (req,res) =>{
    res.sendFile(__dirname+"/views/login.html") 
})

app.get("/register", (req,res) =>{
    res.sendFile(__dirname+"/views/register.html") 
})

app.get("/shoppingcart", (req,res) =>{
    res.sendFile(__dirname+"/views/shoppingcart.html") 
})

app.get("/product_detail", (req,res) =>{
    res.sendFile(__dirname+"/views/product_detail.html") 
})

app.get("*", (req,res) =>{
    res.sendFile(__dirname+"/../public/" +req.url ) 
})
