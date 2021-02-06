module.exports=function(sequelize,DataTypes){ 

    const Role = sequelize.define("roles", {

            id: {
                type: DataTypes.SMALLINT(5),
                autoIncrement:true, 
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(45)
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

    Role.associate = function (models) {
        Role.hasMany(models.users, {
            as: "users",
            foreingKey: "role_id",
        })
    }
    return Role
}