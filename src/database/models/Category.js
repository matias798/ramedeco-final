modele.exports=function(sequelize,DataTypes){
const sequelize = new Sequelize('sequelize')
const Category = sequelize.define("categories", {
    id: {
        type: DataTypes.SMALLINT,
        autoIncrement:true, 
        primaryKey: true
    },
    name: {
        type: {
            type: DataTypes.STRING[32]
        }
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

Category.associate()

return Category}