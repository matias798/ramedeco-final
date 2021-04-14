const db = require("../../database/models");

module.exports = {
    articles: (req,res) => {
        return res.json({
            articles: [
                {
                    url: 'http://localhost:3001/',
                    title: "Ver Categorías - APP",
                }
            ]
        })

    }
};