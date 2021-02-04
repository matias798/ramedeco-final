modele.exports = function (sequelize, DataTypes) {
    const User = Sequelize.define("users",

        {
            id: {
                type: DataTypes.SMALLINT,
                autoIncrement: true,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING[64]
            },
            last_name: {
                type: DataTypes.STRING[64]
            },
            email: {
                type: DataTypes.STRING[64]
            },
            password: {
                type: DataTypes.STRING[100]
            },
            username: {
                type: DataTypes.STRING[64]
            },
            avatar: {
                type: DataTypes.STRING[64]
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
        User.belongsTo(models.Role, {
            as: "role",
            foreingKey: "role_id",
        })
        User.hasMany(models.Purchase, {
            as: "purchases",
            foreingKey: "user_id"
        })
    }
    return User

}