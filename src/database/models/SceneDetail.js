const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const SceneDetail=Sequelize.define("scene_details",
    
    {
        id:DataTypes.SMALLINT,
        position_left:DataTypes.TINYINT,
        position_top:DataTypes.TINYINT,
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    SceneDetail.associate((models)=>{
        SceneDetail.belongTo(models.Product,{
            as:"product",
            foreignKey:"product_id"
        })
        SceneDetail.belongTo(models.Scene,{
            as:"scene",
            foreignKey:"scene_id"
        })
    })
    return SceneDetail
    
}
