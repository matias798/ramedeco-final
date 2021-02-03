const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const Purchase=Sequelize.define("purchases",
    
    {
        id:DataTypes.BIGINT,
        date:DataTypes.TIMESTAMP,
        total:DataTypes.DECIMAL,
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    
    Purchase.associate( (models)=>{
        Purchase.belongsTo(models.Role,{
            as:"users",
            foreingKey:"user_id",
        })
        Purchase.belongsTo(models.PaymentMethod,{
            as:"paymentMethods",
            foreingKey:"payment_method_id",
        })
        Purchase.hasMany(models.PurchaseDetail,{
            as:"purchaseDetails",
            foreingKey:"purchase_id"
        })
    })
    return Purchase
    
}