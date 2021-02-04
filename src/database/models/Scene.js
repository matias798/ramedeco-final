const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const Scene=Sequelize.define("scenes",
    
    {
        id:{type:DataTypes.BIGINT,primaryKey:true},
        main_image:{type:DataTypes.STRING[64]},
        create_at:{type:DataTypes.TIMESTAMP},
        updated_at:{type:DataTypes.TIMESTAMP},
        deleted_at:{type:DataTypes.TIMESTAMP},
    })
    Scene.associate=function(models){
        Scene.hasMany(models.SceneDetail,{
            as:"sceneDetail",
            foreignKey:"scene_id"
        })
    }
    return Scene
    
}