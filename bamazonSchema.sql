DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  itemID INTEGER NOT NULL AUTO_INCREMENT,
  productName VARCHAR(300) NOT NULL,
  departmentName VARCHAR(150) NOT NULL,
  price DECIMAL(7, 2) NOT NULL,
  stockQuantity INTEGER,
  KEY (itemID)
);

-- seed items for DB
INSERT INTO products (itemID, productName, departmentName, price, stockQuantity)
VALUES (1,"Shake Weight", "Health and fitness", 139.99, 8), 
(2, "OMG Mascara", "Makeup", 29.99, 100), 
(3, "Fig protein powder", "Health and fitness", 45, 1256),
(4, "Box of Merlot", "Alcohol", 19.99, 25),
(5, "Edward Scissorhands", "Movies", 9.99, 10),
(6, "Dog shaver", "Pets", 27.45, 8),
(7, "Candycane", "Food", 0.75, 80),
(8, "Adult onesie", "Clothing", 55.10, 14),
(9, "Mustache bleach", "Health and fitness", 8.99, 27),
(10, "Culottes", "Clothing", 29.19, 4);

SELECT * FROM products;