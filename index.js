const express = require("express");
const app = express();

const cors = require("cors");
const mysql = require("mysql");

app.use(cors())

app.listen(3004, () => {
    console.log("Server Running");
  });

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"task_manager"
})

app.get('/', (req, res) => {
    console.log('Received request at /');
    const sqlQuery = "SELECT * FROM tasks";
    db.query(sqlQuery, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred.' });
        } else {
            console.log('Sending data:', data);
            return res.status(200).json(data);
        }
    });
});