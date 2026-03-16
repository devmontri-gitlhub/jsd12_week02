// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ใช้ Aggregation Pipeline เพื่อรวมข้อมูล comments กับ movies
db.comments.aggregate([

  // Stage 1 : $lookup
  // เชื่อมข้อมูลจาก collection movies
  {
    $lookup: {
      from: "movies",          // collection ที่ต้องการ join
      localField: "movie_id",  // field ใน comments
      foreignField: "_id",     // field ใน movies ที่ใช้ match
      as: "movie"              // สร้าง field ใหม่ชื่อ movie เพื่อเก็บผลลัพธ์
    }
  },

  // Stage 2 : $unwind
  // แยก array movie ให้กลายเป็น document ปกติ
  {
    $unwind: "$movie"
  },

  // Stage 3 : $project
  // เลือก field ที่ต้องการแสดงผล
  {
    $project: {
      _id: 0,                     // ไม่แสดง _id
      text: 1,                    // แสดงข้อความ comment
      movieTitle: "$movie.title"  // แสดงชื่อหนังจาก collection movies
    }
  },

  // Stage 4 : $limit
  // จำกัดผลลัพธ์ให้แสดงเพียง 3 รายการ
  {
    $limit: 3
  }

]);