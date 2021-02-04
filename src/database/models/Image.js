modele.exports=function(sequelize,DataTypes){
    const Image = sequelize.define("images", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement:true, 
        primaryKey: true
    },
    path: {
        type: DataTypes.STRING[64]
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
Image.associate = function (models) {
    Image.belongsTo(models.Product, {
        as: "product",
        foreignKey: "product_id"
    })
}

return Image}