const db=require('../database/models')
const { Op } = require("sequelize");
const fs =require('fs')
var path = require('path');
let products = require("../data/products.json");
const scenes = require("../data/scenes.json");

const mapOfProducts = new Map(
  products.map((val) => {
    return [val.id, val];
  }))
let pathProductJSON=path.resolve(__dirname,"..","data/products.json")
for (const scene of scenes) {
  for (const description of scene.pointers_position) {
    let product = mapOfProducts.get(description.description_ref);
    if(product !== undefined && product !== null){
    description.description_tittle = product.tittle;
    description.description_summary = product.summary;
    description.description_price = product.price;
  }
  }
}

productCart=[]

let productsContoller = {
  addToCart: function(req,res){
    let idProducto=req.body.id_product
    let cantidad=req.body.display
    if(req.session != undefined){
      if(req.session.shoppingCart == undefined){
        req.session.shoppingCart=new Map();
      }
      req.session.shoppingCart.set(idProducto,{idProducto:idProducto,amount:cantidad})
    }
    res.redirect('/')
  },

  getShoppingcart: function (req, res) {
    let productsSelected= req.session.shoppingCart.keys()
    if (productsSelected.length === 0)
    { 
        res.render("emptyShoppingcart",{'books':productsInCart,user:req.session.user});}
    else{
      db.Product.findAll({where:{id:{[Op.in]:productsSelected}}}).then( (products) =>{
        for(let i =0; i< products.length;i++){
            products[i].amount = req.session.shoppingCart.get(products[i].id).amount
            products[i].subtotal= products[i].amount * products[i].price
        }

      })
    }
  },

  create: function (req, res) {
    db.categories.findAll().then(
      (categories)=>{

    res.render("create",{'categories':categories,user:req.session.user});

      }
    )

    .catch(
      (error)=>{
 // muestro el error por consola 
 console.log(error);
    
 // Redirecciono a productos
 res.redirect('/products')})

    

  },

  edit: function (req, res) {
    let product=mapOfProducts.get(req.params.id)
    res.render("edit",{'books':mapOfProducts.values(),'product':product,user:req.session.user});
  },

  search: (req, res) => {
    let product = products.filter((producto) => {
      let name = producto.tittle.toLowerCase();
      return (
        req.body.search_input == name ||
        name.indexOf(req.body.search_input.toLowerCase()) != -1
      );
    })[0];
    res.render("productdetail", { product: product,user:req.session.user});
  },
  info:(req,res)=>{
    res.render("info", {user:req.session.user});
  }
  ,
  index: (req, res) => {
    let product_s = products.filter((product) => {
      return product.category != "scene_member";
    });
    let userTs =  req.session.user!=undefined?req.session.user:undefined
    console.log("userTs" + userTs)
    res.render("index", { scenes: scenes, products: product_s ,user:userTs});
  },

  getAllProducts: (req, res) => {
    res.render("adminhome", { products: products ,user:req.session.user});
  },

  findById: (req, res) => {//arreglar
    let product = mapOfProducts.get();
    db.products.findByPk(req.params.id,{include: [{association:"images"}]})
    .then(
      product =>{
        res.render("productdetail", { product: product ,user:req.session.user});
      })
      .catch(error => {console.log(error);res.redirect('/')})
  },

  deleteById: (req, res) => {
    db.products.destroy({where:{id:req.params.id }}).then(result => {
      console.log(result)
      res.redirect("/products");
    }).catch(error => {console.log(error); res.redirect("/products");})
  },

  update:(req,res)=>{
    let product =mapOfProducts.get(req.params.id);
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
    res.redirect('/products')
  },
  store: (req, res) => {
    // Primer premisa que crea un producto
      db.products.create({
      title:req.body.tittle,
      summary:req.body.summary,
      description:req.body.description,
      product_detail:req.body.product_detail,
      price:req.body.price,
      dimension:req.body.dimension,
      stock:req.body.stock,
      main_image:req.files[0].originalname
    })
    
    .then(
    (product)=>{
    
    //  Segunda premisa que crea datos de imagenes
    db.images.create({ 
    path: req.files[0].originalname,
    product_id_images: product.id })
    
    
    .then(
    ()=>{
    // Redirecciono a productos
    res.redirect('/products')
    })
    
    .catch(
    (error)=>{
    // muestro el error por consola 
      console.log(error);
    
    // Redirecciono a productos
    res.redirect('/products')})
    
    })
    
    .catch(
    
    // muestro el error por consola 
    (error)=>{console.log(error);
    
    // Redirecciono a productos
    res.redirect('/products')}
    )
    
    
      },
  getProductByCategory:(req, res) =>{
      let productsByCategory=product.find(product => {return req.params.category== product.category})
      let userts=req.session.user?req.session.user:undefined
      res.render("productCat", {category:req.params.category,products:productsByCategory, user:userts})
  },
  contact: (req, res) => {
    res.render("contact",{user:req.session.user});
  },
};

module.exports = productsContoller;
