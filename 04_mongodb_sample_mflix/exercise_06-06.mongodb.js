// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาข้อมูลใน collection movies
db.movies.find(

  // เงื่อนไขการค้นหา (Query)
  {
    // ค้นหาภาพยนตร์ที่มีผู้กำกับชื่อ "Hal Roach"
    // ใช้ operator $in เพื่อตรวจสอบค่าใน array directors
    directors: { $in: ["Hal Roach"] }
  },

  // การกำหนดฟิลด์ที่ต้องการแสดงผล (Projection)
  {
    // แสดงเฉพาะชื่อภาพยนตร์
    title: 1,

    // แสดงจำนวนรางวัลที่ชนะจาก field awards.wins
    "awards.wins": 1,

    // ไม่แสดง _id
    _id: 0
  }

);