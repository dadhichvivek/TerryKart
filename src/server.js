const express = require('express'); 
const router = express.Router();
const mysql = require('mysql');

// Create MySQL connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database_name'
});

// Connect to MySQL
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Create a new post
router.post('/', function(req, res) {
  const post = req.body;
  const sql = `INSERT INTO posts (title, body) VALUES ('${post.title}', '${post.body}')`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    res.send('Post created successfully');
  });
});

module.exports = router;
