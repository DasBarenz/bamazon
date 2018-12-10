var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

//THIS CODE IS NOT WORKED OUT....placeholder to modify
connection.connect(function(err) {
    if (err) throw err;
    // console.log(connection);
    console.log("connected as id " + connection.threadId);
    // connection.end();
    // connection.query("SELECT * FROM songs", function (err, res) {
    //   if (err) throw err;
    readProducts();
    //   // console.log(res);
    //   // connection.end();
    // })
  });

  function readProducts() {
    console.log("Selecting all songs...\n");
    // connection.query("SELECT * FROM songs", function(err, res) {
    connection.query("SELECT * FROM top_albums", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
    //   for (i = 0; i < res.length; i++) { 
    //     console.log(`ID: ${res[i].id}, Song: ${res[i].title}, Artist ${res[i].artist}, Genre: ${res[i].genre}`);
      console.log(res);
      });
      // console.log(res);
      connection.end();
    };