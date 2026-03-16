// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ใช้ Aggregation Pipeline วิเคราะห์ข้อมูล genres
db.movies.aggregate([

  // Stage 1 : $unwind
  // แยกข้อมูลใน array genres ออกมาเป็น document ทีละค่า
  {
    $unwind: "$genres"
  },

  // Stage 2 : $sortByCount
  // จัดกลุ่ม genres พร้อมนับจำนวน และเรียงลำดับจากมากไปน้อย
  {
    $sortByCount: "$genres"
  },

  // Stage 3 : $limit
  // จำกัดผลลัพธ์ให้แสดงเพียง 10 อันดับแรก
  {
    $limit: 10
  }

]);