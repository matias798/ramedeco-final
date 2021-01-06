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
    description.description_tittle = product.tittle;
    description.description_summary = product.summary;
    description.description_price = product.price;
  }
}

let productSkeleton={"tittle":"",
"summary":"",
"description":"",
"price":"",
"product_detail":"",
"dimension":"",
"main_image":"",
"images":[]}

productCart=[]

let productsContoller = {
  addToCart: function(req,res){
    let idProducto=req.body.id_product
    let cantidad=req.body.display
    productCart.push({idProducto:idProducto,cantidad:cantidad})
    res.redirect('/')
  },
  getShoppingcart: function (req, res) {
    let productsInCart=[]
    productCart.forEach(element => {
      productsInCart.push(mapOfProducts.get(element.idProducto))
    });

    res.render("shoppingcart",{'books':productsInCart});
  },

  create: function (req, res) {
    res.render("create",{'books':mapOfProducts.values()});
  },

  edit: function (req, res) {
    let product=mapOfProducts.get(req.params.id)
    res.render("edit",{'books':mapOfProducts.values(),'product':product});
  },

  search: (req, res) => {
    let product = products.filter((producto) => {
      let name = producto.tittle.toLowerCase();
      return (
        req.body.search_input == name ||
        name.indexOf(req.body.search_input.toLowerCase()) != -1
      );
    })[0];
    res.render("productdetail", { product: product });
  },

  index: (req, res) => {
    let product_s = products.filter((product) => {
      return product.category != "scene_member";
    });
    res.render("index", { scenes: scenes, products: product_s });
  },

  getAllProducts: (req, res) => {
    res.render("adminhome", { products: products });
  },

  findById: (req, res) => {
    let product = mapOfProducts.get(req.params.id);
    res.render("productdetail", { product: product });
  },

  deleteById: (req, res) => {
    products = products.filter((product) => {
      return product.id != req.params.id;
    });
    mapOfProducts.delete(req.params.id);
    res.redirect("/products");
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
		let newProduct={...productSkeleton,...req.body}
		let lastProduct =products.length-1
		if(lastProduct !== -1){
			lastProduct= products[lastProduct]
			newProduct.id= lastProduct.id+1
		}
    for (let i=0;i<req.files.length;i++) {
      if(i == 0 ){
        newProduct.main_image=req.files[i].filename
      }else{
        newProduct.images.push(req.files[i].filename)
      }
    }
    products.push(newProduct)
    mapOfProducts.set(newProduct.id,newProduct)
    fs.writeFileSync(pathProductJSON, JSON.stringify(products))
    res.redirect('/products')
  }
};

module.exports = productsContoller;
