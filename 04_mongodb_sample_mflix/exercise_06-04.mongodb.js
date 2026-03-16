// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหา document ใน collection movies
// โดยตรวจสอบว่าฟิลด์ directors มีชื่อ "Hal Roach"
db.movies.find({

    // เงื่อนไขการค้นหา
    // directors เป็น array ที่เก็บรายชื่อผู้กำกับภาพยนตร์
    // MongoDB จะตรวจสอบว่ามีค่า "Hal Roach" อยู่ใน array หรือไม่
    directors: "Hal Roach"

})

// นับจำนวน document ที่ตรงกับเงื่อนไขทั้งหมด
.count();