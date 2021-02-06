module.exports=function(sequelize,DataTypes){
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
    Purchase.belongsTo(models.users, {
        as: "users",
        foreingKey: "user_id",
    });
    Purchase.belongsTo(models.payment_methods, {
        as: "paymentMethods",
        foreingKey: "payment_method_id",
    });
    Purchase.hasMany(models.purchase_details, {
        as: "purchaseDetails",
        foreingKey: "purchase_id",
    });
};
return Purchase
}