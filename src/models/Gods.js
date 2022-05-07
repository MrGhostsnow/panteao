const Sequelize = require("sequelize");
const connection = require("../database/db");


const Gods = connection.define('gods', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,  
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cultura: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    dominio: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    instrumento: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    imagem:{
        type: Sequelize.STRING,
        allowNull: false,
    },
},
{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
 }
);

module.exports = Gods;

const initTable = async () => {
    try {
        await Gods.sync()
    }
    catch(error){
        return error.message
    }
}

initTable() 