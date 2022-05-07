const Sequelize = require('sequelize');
const Gods = require('../models/Gods')
const connection = new Sequelize(
'postgres://panteao_user:rGJrCc2Ktl2gTbLv93Cub1EjoWnphvVs@dpg-c9rbedr97ej5m8i84130-a.oregon-postgres.render.com/panteao',
 {

dialect: 'postgres',
dialectOptions: {
  ssl: {
    rejectUnauthorized: false,
    require: true
}
}}
);

module.exports = connection;

