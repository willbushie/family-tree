// to start mysql server: 
// `brew services start mysql`
// to stop mysql server:
// `brew services stop mysql`
// access mysql CLI with 'mysql -u root`

let mysql = require('mysql2');
let fs = require('fs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    multipleStatements: true

});

connection.connect(err => {
    if (err) throw err;
    console.log('Successful mySQL connection');

    const sql = fs.readFileSync('setup.sql').toString();

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('--- SQL ERROR ---');
            console.error('Message: ', err.sqlMessage);
            console.error('Code: ', err.code);
            console.error('SQL: ', err.sql);
            console.error('-----------------');
        } else {
            console.log('Database and tables created');
        }
        connection.end();
    });
});

