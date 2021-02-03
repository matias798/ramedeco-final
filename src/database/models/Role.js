const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const Role=Sequelize.define("roles",
    
    {
        id:DataTypes.SMALLINT,
        name:DataTypes.VARCHAR[32],
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    Role.associate( (models)=>{
        Role.hasMany(models.User,{
            as:"users",
            foreingKey:"role_id",
        })
    })
    return Role
    
}