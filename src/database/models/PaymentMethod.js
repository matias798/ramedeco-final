module.exports=function(sequelize,DataTypes){
const PaymentMethod = sequelize.define("payment_methods",

    {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement:true, 
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: false
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
    
PaymentMethod.associate = function (models) {
    PaymentMethod.hasMany(models.purchases, {
        as: "purchases",
    })
}

return PaymentMethod}