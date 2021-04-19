const db = require("../../database/models");

module.exports = {
    articles: (req,res) => {
        return res.json({
            articles: [
                {
                    url: 'https://ramedecoo.herokuapp.com/',
                    title: "Ver Categorías - APP",
                }
            ]
        })

    }
};