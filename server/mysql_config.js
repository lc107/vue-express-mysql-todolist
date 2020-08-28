const mysql = require('mysql')

module.exports = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'xxxxxx',
    port:3306,
    database:'test',
    multipleStatements:true
})
