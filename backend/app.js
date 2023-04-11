const mysql      = require('mysql')
const express = require("express")
const util = require('util')
require('dotenv').config()

const app = express();
app.use(express.json())


async function getRecords(offset,limit){
  var connection = mysql.createConnection({
    host     : process.env.DB_HOST_READ,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  });
  const query = util.promisify(connection.query).bind(connection);


  const rows = await query(`SELECT* from contacts limit ${offset},${limit}`);
  return rows;
}


app.get("/contacts",async (req,res) => {
  let limit = 10
  let offset = 0

  const rows = await getRecords(offset,limit);
  res.send(rows)

});

 


app.listen(8080,() => console.log("Listening started"))