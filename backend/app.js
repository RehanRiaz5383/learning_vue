const mysql      = require('mysql');
require('dotenv').config()

var connection = mysql.createConnection({
  host     : process.env.DB_HOST_READ,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});



connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
