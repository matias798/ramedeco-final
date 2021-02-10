module.exports=function(sequelize,DataTypes){ 
     const Role = sequelize.define("roles", 
    
         {

            id: {
                type: DataTypes.SMALLINT(5),
                autoIncrement:true, 
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false
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
        })

     Role.associate = function (models) {
        Role.hasMany(models.users, {
            as: "users",
        })
    }
    return Role
}