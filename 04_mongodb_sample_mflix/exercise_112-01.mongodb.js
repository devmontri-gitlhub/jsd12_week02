// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ใช้ Aggregation Pipeline เพื่อประมวลผลข้อมูล
db.movies.aggregate([

  // Stage 1 : $match
  // คัดกรองข้อมูล โดยเลือกเฉพาะภาพยนตร์ที่กำกับโดย "Christopher Nolan"
  {
    $match: {
      directors: "Christopher Nolan"
    }
  },

  // Stage 2 : $sort
  // เรียงลำดับข้อมูลตามปี (year) จากมากไปน้อย
  {
    $sort: {
      year: -1
    }
  },

  // Stage 3 : $limit
  // จำกัดจำนวนผลลัพธ์ให้แสดงเพียง 5 เรื่อง
  {
    $limit: 5
  },

  // Stage 4 : $project
  // เลือก field ที่ต้องการแสดงผล
  {
    $project: {
      _id: 0,   // ไม่แสดง _id
      title: 1, // แสดงชื่อภาพยนตร์
      year: 1   // แสดงปีที่ออกฉาย
    }
  }

]);