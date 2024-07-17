const Sequelize = require('sequelize');

// Configuration object for your SQL Server connection
const sequelize = new Sequelize('McTekMsSql', 'sa', '123456789Mustafa', {
    host: 'localhost',
    port: 1434,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true, // Use encryption
            trustServerCertificate: true // Trust the server certificate
        }
    }
});

module.exports = sequelize;
