const { Sequelize, DataTypes } = require('sequelize');
module.exports=function(Sequelize,DataTypes){
    const Scene=Sequelize.define("scenes",
    
    {
        id:{type:DataTypes.BIGINT,primaryKey:true},
        main_image:{type:DataTypes.STRING(64)},
        create_at:{type:DataTypes.DATE},
        updated_at:{type:DataTypes.DATE},
        deleted_at:{type:DataTypes.DATE},
    })
    Scene.associate=function(models){
        Scene.hasMany(models.scene_details,{
            as:"sceneDetail",
            foreignKey:"scene_id"
        })
    }
    return Scene
    
}