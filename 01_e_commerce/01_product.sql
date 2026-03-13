-- Clear existing data to prevent duplication
TRUNCATE TABLE product RESTART IDENTITY CASCADE;

INSERT INTO product (id_product, name_product, detail_product, count_product, price_product) VALUES
(1, 'SSD Samsung', 'SSD 1TB NVMe', 50, 2990.00),
(2, 'SD Kingston', 'SD Card 128GB', 120, 450.00),
(3, 'HDD Seagate', 'HDD 2TB SATA', 35, 1890.00);

