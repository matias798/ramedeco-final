modele.exports=function(sequelize,DataTypes){
const Product = sequelize.define("products", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement:true, 
        primaryKey: true
    },
    tittle: {
        type: DataTypes.STRING[64]
    },
    summary: {
        type: DataTypes.STRING[64]
    },
    description: {
        type: DataTypes.STRING[255]
    },
    product_detail: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DOUBLE(8, 2)
    },
    dimension: {
        type: DataTypes.STRING[32]
    },
    main_image: {
        type: DataTypes.STRING[64]
    },
    stock: {
        type: DataTypes.INTEGER
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
Product.associate = function (models) {
    Product.hasMany(models.PurchaseDetail, {
        as: "purchaseDetails",
        foreignKey: "product_id"
    })
    Product.hasMany(models.PurchaseDetail, {
        as: "purchaseDetails",
        foreignKey: "product_id"
    })
    Product.hasMany(models.SceneDetail, {
        as: "sceneDetail",
        foreignKey: "product_id"
    })
}
return Product}