// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหา document ใน collection movies
// โดยตรวจสอบว่าฟิลด์ cast มีชื่อ "Roy L. McCardell"
db.movies.find({
    
    // เงื่อนไขการค้นหา
    // cast เป็น array ของรายชื่อนักแสดง
    // MongoDB จะตรวจสอบว่ามีค่า "Roy L. McCardell" อยู่ใน array หรือไม่
    cast: "Roy L. McCardell"

})

// นับจำนวน document ที่ตรงกับเงื่อนไข
.count();