// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาภาพยนตร์ที่มีความยาวน้อยกว่า 60 นาที
// เรียงลำดับ runtime จากมากไปน้อย
// และแสดงผลลัพธ์เพียง 5 รายการ
db.movies.find({
    runtime: { $lt: 60 }
})
.sort({ runtime: -1 })
.limit(5);