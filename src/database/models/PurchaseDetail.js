const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const PurchaseDetail=Sequelize.define("purchase_details",
    
    {
        id:DataTypes.BIGINT,
        amount:DataTypes.INTEGER,
        subtotal:DataTypes.DECIMAL,
        unit_price:DataTypes.DECIMAL,
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    PurchaseDetail.associate((models)=>{
        PurchaseDetail.belongsTo(models.Product,{
            as:"product",
            foreignKey:"product_id"
        })
        PurchaseDetail.belongsTo(models.Purchase,{
            as:"purchase",
            foreignKey:"purchase_id"
        })
    })
        
    return PurchaseDetail
    
}