var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    products();
});

function products() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log(`\n- - - - - - - - - - - - - - - - Inventory - - - - - - - - - - - - - - - -\n`);
        console.table(res);
        start();
    });
}

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw console.log("connection error:" + err);
        inquirer
            .prompt([
                {
                    name: 'selectId',
                    type: 'input',
                    message: 'Enter the ID number of the item you would like to buy.',
                },
                {
                    name: 'amountBought',
                    type: 'input',
                    message: 'How many would you like?',
                }
            ]).then(function (answers) {
                var query = "SELECT * FROM products WHERE ?";
                connection.query(query, {itemID: answers.selectId}, function (err, res) {
                    var inStock = res[0].stockQuantity;
                    var numberBought = answers.amountBought;

                    if (inStock >= numberBought) {
                        var leftInStock = inStock - numberBought;
                        var totalPrice = res[0].price * numberBought;
                        var itemPurchased = res[0].productName;
                        console.log(`Total: $${totalPrice}`);
                        connection.query("UPDATE products SET ? WHERE ?", [
                                { stockQuantity: leftInStock },
                                { itemID: answers.selectId }
                            ],
                            function (error) {
                                if (error) throw err;
                                console.log(`\n- - - - - - - - - - - - - - Purchase Details - - - - - - - - - - - - - -\n`)
                                console.table([
                                    {
                                      Item: itemPurchased,
                                      Quantity: numberBought,
                                      Total: `$${totalPrice}`
                                    }
                                  ]);
                                products();
                            }
                        );
                    } else {
                        console.log(`\nWe are sorry, we only have ${res[0].stockQuantity} ${res[0].productName}/s left in stock\n`);
                        products();
                    }
                });
            });
    });
}