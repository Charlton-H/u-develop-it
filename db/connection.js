const mysql = require("mysql2");

// Conect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySSQL username,
    user: "root",
    // password ""
    password: "CursedSword!23",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
