// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ใช้ Aggregation Pipeline กับ collection ชื่อ movies
db.movies.aggregate([

  // Stage ที่ 1 : $match
  // ใช้สำหรับกรองข้อมูล (filter documents)
  {
    $match: {

      // $or หมายถึง เงื่อนไขใดเงื่อนไขหนึ่งเป็นจริงก็ได้
      $or: [

        // เลือกหนังที่มีภาษา English
        { languages: "English" },

        // หรือ เลือกหนังที่มีภาษา French
        { languages: "French" }

      ]
    }
  },

  // Stage ที่ 2 : $project
  // ใช้สำหรับกำหนด field ที่ต้องการแสดงในผลลัพธ์
  {
    $project: {

      // 0 หมายถึง ไม่แสดง field _id
      _id: 0,

      // 1 หมายถึง ให้แสดง field title
      title: 1,

      // 1 หมายถึง ให้แสดง field languages
      languages: 1
    }
  }

]);