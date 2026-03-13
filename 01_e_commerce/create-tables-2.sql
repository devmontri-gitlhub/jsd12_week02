

-- 1. Create Product Table
CREATE TABLE product (
    id_product SERIAL PRIMARY KEY,
    name_product VARCHAR(25) NOT NULL,
    detail_product VARCHAR(255),
    count_product INTEGER NOT NULL,
    price_product FLOAT
);