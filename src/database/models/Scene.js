const { Sequelize, DataTypes } = require('sequelize');
module.exports=function(Sequelize,DataTypes){
    const Scene=Sequelize.define("scenes",
    
    {
        id:{type:DataTypes.BIGINT,primaryKey:true},
        main_image:{type:DataTypes.STRING(64)},
        created_at:{type:DataTypes.DATE},
        updated_at:{type:DataTypes.DATE},
        deleted_at:{type:DataTypes.DATE},
    },{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        "underscored": true
    })
    Scene.associate=function(models){
        Scene.hasMany(models.scene_details,{
            as:"sceneDetail",
        })
    }
    return Scene
    
}