module.exports = function(sequelize,DataTypes){
    const Category_product = sequelize.define("Category_product",{
        product_id_cat: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            references: {
                model: "Product",
                key:"id"
            }
        },
        category_id_prod: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: "Category",
                key:"id"
            }
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

    return Category_product}
