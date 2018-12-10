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
VALUES (1,"Girls Bicycle", "Toys", 139.99, 8), 
(2, "Miracle Mascara", "Makeup", 29.99, 100), 
(3, "Fig protein powder", "Health and fitness", 45, 1256);

SELECT * FROM products;