const mysql      = require('mysql')
const express = require("express")
const cors = require("cors");
const util = require('util')
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(cors())

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
  

  let {offset=0,limit=10} = req.query;

  
  const rows = await getRecords(offset,limit);
  res.send(rows)

});

 


app.listen(8080,() => console.log("Listening started"))