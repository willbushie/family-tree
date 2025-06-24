const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

// Serve static frontend files from /public
app.use(express.static('public'));

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

// basically an API call to `/`
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

app.get('/', (req, res) => {
    res.send('Hello World!')
});

