module.exports=function(sequelize,DataTypes){
const PurchaseDetail = sequelize.define("purchase_details",

    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement:true, 
            primaryKey: true
        },
        amount: {
            type: DataTypes.INTEGER,allowNull:false
            
        },
        subtotal: {
            type: DataTypes.DECIMAL,allowNull:false
        },
        unit_price: {
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
        purchase_id_purchase_detail:{
            type:DataTypes.BIGINT,
            allowNull:false
        },
        product_id_purchase_detail:{
            type:DataTypes.BIGINT,
            allowNull:false
        }
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