const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const Image=Sequelize.define("images",
    
    {
        id:DataTypes.BIGINT,
        path:DataTypes.VARCHAR[64],
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    Image.associate((models)=>{
        Image.belongsTo(models.Product,{
            as:"product",
            foreignKey:"product_id"
        })
    })
    return Image
    
}