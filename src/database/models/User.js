const { Sequelize, DataTypes } = require('sequelize');
modele.exports=function(Sequelize,DataTypes){
    const User=Sequelize.define("users",
    
    {
        id:DataTypes.BIGINT,
        first_name:DataTypes.VARCHAR[64],
        last_name:DataTypes.VARCHAR[64],
        email:DataTypes.VARCHAR[64],
        password:DataTypes.VARCHAR[100],
        username:DataTypes.VARCHAR[64],
        avatar:DataTypes.VARCHAR[64],
        create_at:DataTypes.TIMESTAMP,
        updated_at:DataTypes.TIMESTAMP,
        deleted_at:DataTypes.TIMESTAMP,
    })
    
    User.associate( (models)=>{
        User.belongsTo(models.Role,{
            as:"role",
            foreingKey:"role_id",
        })
        User.hasMany(models.Purchase,{
            as:"purchases",
            foreingKey:"user_id"
        })
    })
    return User
    
}