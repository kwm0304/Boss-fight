CREATE TABLE characters (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    tier VARCHAR(1) NOT NULL,
    name VARCHAR(30) NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    sacrifice INTEGER
);