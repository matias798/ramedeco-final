module.exports=function(sequelize,DataTypes){
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
        description_left: {
            type: DataTypes.TINYINT
        },
        description_top: {
            type: DataTypes.TINYINT
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
    }
);
SceneDetail.associate = function (models) {
    SceneDetail.belongsTo(models.products);
    SceneDetail.belongsTo(models.scenes);
};
return SceneDetail
}