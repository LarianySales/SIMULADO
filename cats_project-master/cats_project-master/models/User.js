const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize()

const User =sequelize.define('User',{
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
        require:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        require:true
    },
    senha:{
        type:DataTypes.CHAR,
        allowNull:false,
        require:true
    }
})
module.exports = User