const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const Category=Sequelize.define("categories",
    
    {
        id:DataTypes.SMALLINT,
        name:DataTypes.VARCHAR[32],
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    Category.associate()
    return Category
    
}