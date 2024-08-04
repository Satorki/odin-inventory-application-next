CREATE DATABASE carshop;

CREATE TABLE car_shop(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

SELECT * FROM car_shop;