const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'den1.mysql4.gear.host',
  user: 'company7',
  password: 'Zi45!C~rE2YJ',
  database: 'company7',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
