const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const Scene=Sequelize.define("scenes",
    
    {
        id:DataTypes.BIGINTEGER,
        main_image:DataTypes.VARCHAR[64],
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    Scene.associate((models)=>{
        Scene.hasMany(models.SceneDetail,{
            as:"sceneDetail",
            foreignKey:"scene_id"
        })
    })
    return Scene
    
}