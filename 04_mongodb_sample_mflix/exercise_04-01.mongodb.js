// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาภาพยนตร์ที่มีคำว่า "American" อยู่ใน plot
// ไม่สนตัวพิมพ์ใหญ่หรือเล็ก แล้วนับจำนวนผลลัพธ์
db.movies.find({
    plot: {
        $regex: "American",
        $options: "i"
    }
}).count();