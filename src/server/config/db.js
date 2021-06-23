const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'BlogPosts',
    port: '3305',
    
})

module.exports = db