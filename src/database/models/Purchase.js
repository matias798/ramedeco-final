modele.exports=function(sequelize,DataTypes){
const Purchase = sequelize.define(
    "purchases",

    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement:true, 
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE
        },
        total: {
            type: DataTypes.DECIMAL
        },
        create_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
        },
    }
);

Purchase.associate = function (models) {
    Purchase.belongsTo(models.Role, {
        as: "users",
        foreingKey: "user_id",
    });
    Purchase.belongsTo(models.PaymentMethod, {
        as: "paymentMethods",
        foreingKey: "payment_method_id",
    });
    Purchase.hasMany(models.PurchaseDetail, {
        as: "purchaseDetails",
        foreingKey: "purchase_id",
    });
};
return Purchase
}