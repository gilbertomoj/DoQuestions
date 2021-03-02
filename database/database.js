const Sequelize = require('sequelize');
//Sequelize é usado para conexão , manipulação e remoção diretamente no NodeJS
//Pode ser usado em Postgree , SQLite , MariaDB , SQLServer (alteração em qualquer banco SQL)

const connection = new Sequelize('doquestions','root','1234',{
    host: 'localhost',
    dialect:'mysql'
})

module.exports = connection;