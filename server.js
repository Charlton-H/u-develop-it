const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default reponse for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
