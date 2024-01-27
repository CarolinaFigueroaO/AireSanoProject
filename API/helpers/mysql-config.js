const mysql = require('mysql2');

const config = {
    host: process.env.DBHOST || 'tc1004b.csisjz2f85bc.us-east-1.rds.amazonaws.com',
    user: process.env.DBUSER || 'admin',
    password: process.env.DBPASSWORD || '%Imica2022',
    database: process.env.DATABASE || 'aireSano',
    port: process.env.DBPORT || 3306,
    dateStrings: true,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const pool = mysql.createPool(config);

module.exports = pool;