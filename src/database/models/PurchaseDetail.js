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
    })
PurchaseDetail.associate = function (models) {
    PurchaseDetail.belongsTo(models.products)
    PurchaseDetail.belongsTo(models.purchases)
}

return PurchaseDetail}