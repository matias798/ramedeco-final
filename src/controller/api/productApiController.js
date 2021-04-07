const db = require("../../database/models");

module.exports = {
    getProducts: async function (req, res) {
        try {
            let countByCategory = {};
            let products = await db.products.findAll({
                attributes: ["id", "title", "description","main_image","created_at"],
                include: [{
                    association: "category_product",
                    attributes: ["id", "name"],
                    subQuery: false,
                }, ],
            });
console.log(products)
            products.forEach((element) => {
                element.detail = "localhost:3001/api/products/" + element.id;
                element.main_image="localhost:3001/images/home/productos/"+element.main_image
                if (element.category_product) {
                    element.category_product.forEach((element2) => {
                        if (countByCategory[element2.name]) {
                            countByCategory[element2.name] += 1;
                        } else {
                            countByCategory[element2.name] = 1;
                        }
                    });
                }
            });
            res.status(200).json({
                count: products.length,
                countByCategory: countByCategory,
                products: products,
            });
        } catch (error) {
            console.log(error);
            res
                .status(404)
                .json({
                    errorMessage: "Un error ocurrio, por favor intenta nuevamente",
                });
        }
    },
    getProductByid: async function (req, res) {
        try {
            let product = await db.products.findByPk(req.params.id,{
                include: [{
                        association: "category_product"
                    },
                    {
                        association: "images"
                    },
                    {
                        association: "purchaseDetails"
                    },
                    {
                        association: "sceneDetail"
                    },
                ],
            });
            product.main_image="localhost:3000/images/home/productos/"+product.main_image
            product.images.forEach(element => {
                element.path="localhost:3000/images/home/productos/"+element.path
            })
            res.status(200).json(product)

        } catch (error) {
            console.log(error);
            res
                .status(404)
                .json({
                    errorMessage: "Un error ocurrio, por favor intenta nuevamente",
                });
        }
    },
};