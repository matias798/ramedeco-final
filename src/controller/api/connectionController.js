const db = require("../../database/models");

module.exports = {
    categories: (req,res) => {
        return res.json({
            categories: [
                {
                    url: 'http://localhost:3001/',
                    title: "INICIO"
                },
                {
                    url: 'http://localhost:3001/products/',
                    title: "LISTADO DE PRODUCTOS"
                },
                {
                    url:'http://localhost:3001/products/create',
                    title: "CREAR NUEVO PRODUCTO"
                },
                {
                    url:'http://localhost:3001/users/',
                    title: "USUARIOS"
                }
            ]
        })

    }
};