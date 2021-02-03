const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const PaymentMethod=Sequelize.define("payment_methods",
    
    {
        id:DataTypes.SMALLINT,
        name:DataTypes.VARCHAR[32],
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    PaymentMethod.associate((models)=>{
        PaymentMethod.hasMany(models.Purchase,{
            as:"purchases",
            foreingKey:"payment_method_id"
        })}
    )
    return PaymentMethod
    
}