module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("users",

        {
            id: {
                type: DataTypes.BIGINT(20),
                autoIncrement: true,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            username: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            address: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            avatar: {
                type: DataTypes.STRING(64)
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

    User.associate = function (models) {
        User.belongsTo(models.roles, {
            as: "role",
            foreingKey: "role_id",
        })
        User.hasMany(models.purchases, {
            as: "purchases",
            foreingKey: "user_id"
        })
    }
    return User

}