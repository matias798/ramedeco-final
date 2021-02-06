module.exports=function(sequelize,DataTypes){
const PurchaseDetail = sequelize.define("purchase_details",

    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement:true, 
            primaryKey: true
        },
        amount: {
            type: DataTypes.INTEGER
        },
        subtotal: {
            type: DataTypes.DECIMAL
        },
        unit_price: {
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
    })
PurchaseDetail.associate = function (models) {
    PurchaseDetail.belongsTo(models.products, {
        as: "product",
        foreignKey: "product_id"
    })
    PurchaseDetail.belongsTo(models.purchases, {
        as: "purchase",
        foreignKey: "purchase_id"
    })
}

return PurchaseDetail}