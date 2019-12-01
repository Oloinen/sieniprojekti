CREATE TABLE sieni (
    id SERIAL PRIMARY KEY,
    finnishname VARCHAR(255) NOT NULL,
    latinname VARCHAR(255) NOT NULL,
    grouping VARCHAR(255),
    edible BOOLEAN,
    stars INT,
    foundtime DATE,
    location VARCHAR(255),
    environment TEXT,
    description TEXT
);