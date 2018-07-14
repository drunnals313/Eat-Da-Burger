CREATE TABLE heroku_50a0ae681b98a49.burgers(
	id INTEGER auto_increment not null,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP not null DEFAULT current_timestamp,
    primary key(id)
    );


/* 
    JAWSDB version
    */

USE w5ergtsckl98uek7;


CREATE TABLE burgers(
	id INTEGER auto_increment not null,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    primary key(id)
);

 
