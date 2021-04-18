const db = require("../../database/models");

module.exports = {
    categories: (req,res) => {
        return res.json({
            categories: [
                {
                    url: 'http://localhost:3001/userhome',
                    title: "INICIO",
                    classIcon:"fas fa-home"
                },
                {
                    url: 'http://localhost:3001/products',
                    title: "LISTADO DE PRODUCTOS",
                    classIcon:"fas fa-align-justify"
                },
                {
                    url:'http://localhost:3001/products/create',
                    title: "AGREGAR PRODUCTO",
                    classIcon:"fas fa-plus-circle"
                },
                {
                    url:'http://localhost:3001/users/',
                    title: "USUARIOS",
                    classIcon:"fas fa-users"
                }
            ]
        })

    }
};