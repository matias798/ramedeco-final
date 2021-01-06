let products = require("../data/products.json");
const scenes = require("../data/scenes.json");
const fs = require('fs');
const uuid = require('uuid');
const mercadopago = require ('mercadopago');


// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-6620761640775699-010614-a4087d4d47f0304e0a446c3e689d32b7-229538513'
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: "Estamos probando",
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});


const json_books = fs.readFileSync('src/data/products.json', 'utf-8');
let books = JSON.parse(json_books);

const mapOfProducts = new Map(
  products.map((val) => {
    return [val.id, val];
  })
);
for (const scene of scenes) {
  for (const description of scene.pointers_position) {
    let product = mapOfProducts.get(description.description_ref);
    description.description_tittle = product.tittle;
    description.description_summary = product.summary;
    description.description_price = product.price;
  }
}

let productsContoller = {
  getShoppingcart: function (req, res, next) {
    res.render("shoppingcart",{books});
  },

  createGet: function (req, res) {
    res.render("create",{books});
  },

  createPost: function (req, res) {

  const { tittle, summary, description ,product_detail,category} = req.body;


  var newProduct = {
    id: uuid.v4(),
    tittle,
    summary,
    description,
    product_detail,
    category
  };
// add a new book to the array
books.push(newProduct);

// saving the array in a file
const json_books = JSON.stringify(books);
fs.writeFileSync('src/data/products.json', json_books, 'utf-8');

res.redirect('/products/shoppingcart');
},

  edit: function (req, res) {
    res.render("edit",{books});
  },

  search: (req, res) => {
    let product = products.filter((producto) => {
      let name = producto.name;
      name = name.toLowerCase();
      return (
        req.body.keywords == name ||
        name.indexOf(req.body.keywords.toLowerCase()) != -1
      );
    });
    res.render("productdetail", { product: product });
  },
  getAll: (req, res) => {
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
    res.render("", { product: product });
  },
  deleteById: (req, res) => {
    products = products.filter((product) => {
      return product.id != req.params.id;
    });
    mapOfProducts.delete(req.params.id);
    res.redirect("/admin");
  },
  store:(req,res)=>{
    let product =mapOfProducts.get(req.params.id);
    product.tittle=req.body.tittle,
    product.category=req.body.category
    product.summary=req.body.summary
    product.description=req.body.description
    product.price=req.body.price
    product.product_detail=req.body.product_detail
    product.dimension=req.body.dimension
  }
};

module.exports = productsContoller;
