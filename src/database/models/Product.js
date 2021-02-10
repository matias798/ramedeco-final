module.exports = function(sequelize,DataTypes){
const Product = sequelize.define("products", {
    id: {
        type: DataTypes.BIGINT(20),
        autoIncrement:true, 
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    summary: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255)
    },
    product_detail: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DOUBLE(8,2),
        allowNull: false
    },
    dimension: {
        type: DataTypes.STRING(32)
    },
    main_image: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
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
Product.associate = function (models) {
    Product.hasMany(models.purchase_details, {
        as: "purchaseDetails",
    })
    Product.hasMany(models.scene_details, {
        as: "sceneDetail",
    })
    Product.hasMany(models.images, {
        as: "images", 
    })
    Product.belongsToMany(models.categories,{
        as: "category_product",
        through: "Category_product",
        foreignkey: "product_id",
        otherKey:"category_id",
        timestamps: true
    })
}
return Product}