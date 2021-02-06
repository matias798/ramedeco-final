module.exports=function(sequelize,DataTypes){
    const Image = sequelize.define("images", 
    
    {
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement:true, 
            primaryKey: true
        },
        path: {
            type: DataTypes.STRING(64),
            allowNull: false
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
    Image.belongsTo(models.products, {
        as: "product", 
        foreignKey: "product_id_image"
    })
 }
 
 return Image

}