# สรุปความเข้าใจโค้ด SQL ในระบบฐานข้อมูลร้านอาหาร

เอกสารนี้รวบรวมโค้ด SQL จากไฟล์ต่างๆ ในโปรเจกต์ พร้อมคำอธิบายหน้าที่และความเกี่ยวข้องของแต่ละส่วน

---

## 1. การสร้างโครงสร้างตาราง (create-tables.sql)
ไฟล์นี้เป็นจุดเริ่มต้นในการกำหนดโครงสร้าง (Schema) ทั้งหมดของระบบ

```sql
-- สร้างตาราง Suppliers สำหรับเก็บข้อมูลผู้ส่งมอบวัตถุดิบ
CREATE TABLE Suppliers (
    supplier_id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    phone_number VARCHAR(20)
);

-- สร้างตาราง Staff สำหรับเก็บข้อมูลพนักงาน
CREATE TABLE Staff (
    staff_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50)
);

-- สร้างตาราง Ingredients เก็บวัตถุดิบ เชื่อมกับ Suppliers (1:N)
CREATE TABLE Ingredients (
    ingredient_id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL UNIQUE,
    stock_level DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    unit VARCHAR(50) NOT NULL,
    supplier_id INTEGER REFERENCES Suppliers(supplier_id)
);

-- สร้างตาราง MenuItems เก็บรายการเมนูอาหาร
CREATE TABLE MenuItems (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50)
);

-- สร้างตาราง RecipeItems (Join Table) กำหนดส่วนประกอบของแต่ละเมนู (M:N)
CREATE TABLE RecipeItems (
    recipe_item_id SERIAL PRIMARY KEY,
    item_id INTEGER NOT NULL REFERENCES MenuItems(item_id),
    ingredient_id INTEGER NOT NULL REFERENCES Ingredients(ingredient_id),
    quantity_needed DECIMAL(10, 2) NOT NULL
);

-- สร้างตาราง Orders เก็บข้อมูลการสั่งซื้อ
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP NOT NULL DEFAULT NOW(),
    total_price DECIMAL(10, 2) NOT NULL,
    staff_id INTEGER REFERENCES Staff(staff_id)
);

-- สร้างตาราง OrderItems (Join Table) รายละเอียดเมนูในแต่ละออเดอร์ (M:N)
CREATE TABLE OrderItems (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES Orders(order_id),
    item_id INTEGER NOT NULL REFERENCES MenuItems(item_id),
    quantity INTEGER NOT NULL
);
```

---

## 2. ข้อมูลจำลอง (Mock Data)

### 01_suppliers.sql
ข้อมูลผู้ส่งมอบวัตถุดิบหลัก 3 ราย
```sql
TRUNCATE TABLE Suppliers RESTART IDENTITY CASCADE;
INSERT INTO Suppliers (supplier_id, name, contact_person, phone_number) VALUES
(1, 'Patty''s Premium Meats', 'Patty Smith', '555-0101'),
(2, 'The Bun Barn', 'Brad Breadson', '555-0102'),
(3, 'Freshest Farm Produce', 'Frank Farmer', '555-0103');
```

### 02_staff.sql
ข้อมูลพนักงานแบ่งเป็น Cashier และ Cook
```sql
TRUNCATE TABLE Staff RESTART IDENTITY CASCADE;
INSERT INTO Staff (staff_id, first_name, last_name, s_role) VALUES
(1, 'Jane', 'Doe', 'Cashier'),
(2, 'John', 'Smith', 'Cook'),
(3, 'Emily', 'Jones', 'Cashier'),
(4, 'Chris', 'Williams', 'Cook');
```

### 03_ingredients.sql
รายการวัตถุดิบในสต็อก พร้อมระบุหน่วยวัดและผู้ส่งมอบ
```sql
TRUNCATE TABLE Ingredients RESTART IDENTITY CASCADE;
INSERT INTO Ingredients (ingredient_id, name, stock_level, unit, supplier_id) VALUES
(1, 'Beef Patty', 200, 'units', 1),
(3, 'Burger Bun', 300, 'units', 2),
(4, 'Lettuce', 20, 'heads', 3);
-- (และวัตถุดิบอื่นๆ อีกมากมาย)
```

### 04_menu_items.sql
รายการอาหาร ราคา และหมวดหมู่ (Burger, Side, Drink)
```sql
TRUNCATE TABLE MenuItems RESTART IDENTITY CASCADE;
INSERT INTO MenuItems (item_id, name, description, price, category) VALUES
(1, 'The All-American', 'A classic beef burger...', 12.50, 'Burger'),
(2, 'Bacon Cheeseburger', 'Our classic burger topped with bacon...', 14.00, 'Burger');
```

### 05_recipe_items.sql
กำหนด "สูตรอาหาร" ว่าแต่ละเมนูต้องใช้วัตถุดิบอะไรบ้าง
```sql
TRUNCATE TABLE RecipeItems RESTART IDENTITY CASCADE;
-- ตัวอย่าง: เมนู The All-American (ID 1) ต้องใช้ Beef Patty (ID 1) และ Burger Bun (ID 3)
INSERT INTO RecipeItems (item_id, ingredient_id, quantity_needed) VALUES
(1, 1, 1), 
(1, 3, 1),
(1, 4, 0.1);
```

### 06_orders.sql
บันทึกประวัติการสั่งซื้อ วันที่ ราคารวม และพนักงานที่รับออเดอร์
```sql
TRUNCATE TABLE Orders RESTART IDENTITY CASCADE;
INSERT INTO orders (order_id, order_date, total_price, staff_id) VALUES
(1, '2025-10-26 12:05:00', 34.00, 1),
(2, '2025-10-26 12:10:00', 19.50, 3);
```

### 07_order_items.sql
ระบุว่าในแต่ละ Order ลูกค้าสั่งเมนูอะไรบ้างและกี่ชุด
```sql
TRUNCATE TABLE orderitems RESTART IDENTITY CASCADE;
-- ออเดอร์ที่ 1 สั่ง Bacon Cheeseburger 1 ชุด และ All-American 1 ชุด เป็นต้น
INSERT INTO orderitems (order_id, item_id, quantity) VALUES
(1, 2, 1),
(1, 1, 1),
(1, 5, 1),
(1, 7, 1);
```

---

## 3. การเรียกดูข้อมูล (query.sql)
คำสั่งพื้นฐานในการตรวจสอบข้อมูลออเดอร์ทั้งหมดในตาราง
```sql
select * from orders;
```
