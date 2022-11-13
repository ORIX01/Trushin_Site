const express = require('express');
const app = express();

const {Pool, Client} = require('pg');
const { pathToFileURL } = require('url');
  
app.get('/', function (req, res) {
  
    const pool = new Pool({
        user: 'vymanvar',
        password: '1234',
        host: '178.20.47.138',
        port: 5432,
        database: 'docdb'
    })

    pool.query('SELECT * FROM weight_table', (err, res)=>{
        console.log(err, res)
        pool.end()
    })

    const client = new Client({
        user: 'vymanvar',
        password: '1234',
        host: '178.20.47.138',
        port: 5432,
        database: 'docdb'
    })
    client.connect()
});

var server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});

// http://localhost:5000/