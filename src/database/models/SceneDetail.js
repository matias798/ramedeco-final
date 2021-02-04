modele.exports=function(sequelize,DataTypes){
const SceneDetail = sequelize.define(
    "scene_details",

    {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement:true, 
            primaryKey: true
        },
        position_left: {
            type: DataTypes.TINYINT
        },
        position_top: {
            type: DataTypes.TINYINT
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
    }
);
SceneDetail.associate = function (models) {
    SceneDetail.belongTo(models.Product, {
        as: "product",
        foreignKey: "product_id",
    });
    SceneDetail.belongTo(models.Scene, {
        as: "scene",
        foreignKey: "scene_id",
    });
};
return SceneDetail
}