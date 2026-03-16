// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาภาพยนตร์ที่มีข้อความใน plot ลงท้ายด้วย "street" ตามรูปแบบ regex
// และไม่สนตัวพิมพ์เล็กหรือพิมพ์ใหญ่ จากนั้นนับจำนวนผลลัพธ์
db.movies.find({
    plot: {
        $regex: "street.$",
        $options: "i"
    }
}).count();