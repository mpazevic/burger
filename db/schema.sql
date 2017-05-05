CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
    burger_name VARCHAR(400),
    devoured BOOLEAN NOT NULL DEFAULT False,
    date TIMESTAMP NOT NULL
);
