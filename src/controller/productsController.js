let productsContoller={

    'getShoppingcart':function(req, res, next) {
        res.render('shoppingcart');},
    
    'create':function(req, res) {
    res.render('create') 
},

    'edit':function (req,res){
        res.render('edit');
    
    }
};



module.exports= productsContoller;
