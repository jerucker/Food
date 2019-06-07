// var mysql = require('mysql');

var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });




// var connection = mysql.createConnection({
//   host     : 'localhost',
//   port: 8889,
//   user     : 'root',
//   password : 'root',
//   database : 'food'
// });
 
// // connection.connect();
 
// // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// //   if (error) throw error;
// //   console.log('The solution is: ', results[0].solution);
// // });
 
// // connection.end();