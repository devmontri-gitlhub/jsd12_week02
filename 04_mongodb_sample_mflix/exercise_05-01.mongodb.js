// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาภาพยนตร์ทั้งหมด
// เรียงลำดับตาม runtime จากมากไปน้อย
// และแสดงผลลัพธ์เพียง 5 รายการ
db.movies.find({})
         .sort({ runtime: -1 })
         .limit(5);