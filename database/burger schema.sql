CREATE DATABASE IF NOT EXISTS tofu_db;
USE tofu_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS tofu;

-- Create the burgers table
CREATE TABLE tofu (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);
