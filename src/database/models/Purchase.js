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
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
        },
    },{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        "underscored": true
    }
);

Purchase.associate = function (models) {
    Purchase.belongsTo(models.users);
    Purchase.belongsTo(models.payment_methods);
    Purchase.hasMany(models.purchase_details, {
        as: "purchaseDetails",
    });
};
return Purchase
}