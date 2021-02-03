const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const Product=Sequelize.define("products",
    
    {
        id:DataTypes.BIGINT,
        tittle:DataTypes.VARCHAR[64],
        summary:DataTypes.VARCHAR[64],
        description:DataTypes.VARCHAR[255],
        product_detail:DataTypes.TEXT,
        price:DataTypes.DOUBLE[8,2],
        dimension:DataTypes.VARCHAR[32],
        main_image:DataTypes.VARCHAR[64],
        stock:DataTypes.INTEGER,
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    Product.associate((models)=>{
        Product.hasMany(models.PurchaseDetail,{
            as:"purchaseDetails",
            foreignKey:"product_id"
        })
        Product.hasMany(models.PurchaseDetail,{
            as:"purchaseDetails",
            foreignKey:"product_id"
        })
        Product.hasMany(models.SceneDetail,{
            as:"sceneDetail",
            foreignKey:"product_id"
        })
    })
    return Product
    
}