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
                allowNull: true
            },
            last_name: {
                type: DataTypes.STRING(64),
                allowNull: true
            },
            email: {
                type: DataTypes.STRING(64),
                allowNull: true
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            username: {
                type: DataTypes.STRING(64),
                allowNull: true
            },
            address: {
                type: DataTypes.STRING(64),
                allowNull: true
            },
            avatar: {
                type: DataTypes.STRING(64),
                allowNull: true
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
//sequelize.sync()
    User.associate = function (models) {
        User.belongsTo(models.roles)
        User.hasMany(models.purchases, {
            as: "purchases",
        })
    }
    return User

}