var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit:10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,

    //el codigo siguiente esta puesto porque tengo instalado mysql en el puerto 8889
    port: process.env.MYSQL_PORT
    
})
//select
pool.query = util.promisify(pool.query);

module.exports= pool;


// codigo oara saber que esta corriendo en el puerto        ( ps axu | grep 8889 )