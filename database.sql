CREATE DATABASE lab_9;

USE lab_9;

CREATE TABLE schoolpenTypes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    description VARCHAR(150) NOT NULL
);