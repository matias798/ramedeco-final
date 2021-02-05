module.exports = function(sequelize,DataTypes){
const sequelize = new Sequelize('sequelize')
const Category = sequelize.define("categories", {
    id: {
        type: DataTypes.TINYINT,
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
    }
})

Category.associate = function(models){
    Category.belongsToMany(models.Product,{
        as: "category_product",
        through: "Category_product",
        foreingnKey: "category_id",
        otherKey:"product_id",
        timestamps: true
    })
}

return Category}