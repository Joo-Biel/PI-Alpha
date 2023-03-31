
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.232.152.160",
  user: "r-alpha",
  password: "23302719h"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

