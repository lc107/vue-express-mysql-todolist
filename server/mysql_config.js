const mysql = require('mysql')

module.exports = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123.com',
    port:3306,
    database:'liuchao',
    multipleStatements:true
})
