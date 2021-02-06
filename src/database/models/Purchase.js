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
            type: DataTypes.DATE,
            allowNull:false
        },
        total: {
            type: DataTypes.DECIMAL,allowNull:false
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
        payment_method_id:{
            type: DataTypes.SMALLINT,allowNull:false

        },
        user_id:{
            type: DataTypes.BIGINT,allowNull:false
        }
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