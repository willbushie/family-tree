const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

// Serve static frontend files from /public
app.use(express.static('public'));

// enable JSON body parsing for POST requests
app.use(express.json());

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'familytree',
  multipleStatements: true
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});


// API call to GET people information
app.get('/api/people', (req, res) => {
  //res.send('Hello World!')

  con.connect(function (err) {
    if (err) throw err;
    con.query('SELECT fname, lname, date_of_birth, father_id, mother_id FROM people',
      function (err, result, fields) {
        if (err) throw err;
        //console.log(result)
        res.send(result)
      });
  });
});


// API add new perosn to database
app.post('/api/people', (req, res) => {
  const { fname, lname, date_of_birth, sex } = req.body;

  if (!fname || !lname || !date_of_birth || !sex) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = 'INSERT INTO people (fname, lname, date_of_birth, sex) VALUES (?, ?, ?, ?)';
  con.query(sql, [fname, lname, date_of_birth, sex], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Person added', id: result.insertId });
  });
});

