module.exports = function(sequelize,DataTypes){
    const Scene_category = sequelize.define("Scene_category",{
        scene_id_category: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            references: {
                model: "Scene",
                key:"id"
            }
        },
        category_id_scene: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: "Category",
                key:"id"
            }
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    })

    return Scene_category}
