// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ใช้ Aggregation Pipeline กับ collection movies
db.movies.aggregate([

  // Stage ที่ 1 : $match
  // ใช้กรองข้อมูลตามเงื่อนไขที่กำหนด
  {
    $match: {

      // $and หมายถึง ทุกเงื่อนไขภายในต้องเป็นจริงทั้งหมด
      $and: [

        // เงื่อนไขที่ 1 :
        // เลือกหนังที่ปี (year) อยู่ระหว่าง 2000 ถึง 2009
        {
          year: {
            $gte: 2000,   // มากกว่าหรือเท่ากับ 2000
            $lte: 2009    // น้อยกว่าหรือเท่ากับ 2009
          }
        },

        // เงื่อนไขที่ 2 :
        // ต้องเข้าเงื่อนไขใดเงื่อนไขหนึ่งใน $or
        {
          $or: [

            // หนังที่มี genre เป็น Drama
            { genres: "Drama" },

            // หรือ หนังที่มีคะแนน imdb.rating มากกว่าหรือเท่ากับ 7.0
            {
              "imdb.rating": {
                $gte: 7.0
              }
            }

          ]
        }

      ]
    }
  },

  // Stage ที่ 2 : $limit
  // จำกัดจำนวนผลลัพธ์ให้แสดงเพียง 10 รายการแรก
  {
    $limit: 10
  },

  // Stage ที่ 3 : $project
  // กำหนด field ที่ต้องการให้แสดงในผลลัพธ์
  {
    $project: {

      // 0 = ไม่แสดง field _id
      _id: 0,

      // 1 = แสดง field title
      title: 1,

      // 1 = แสดง field year
      year: 1,

      // 1 = แสดง field genres
      genres: 1,

      // 1 = แสดง field imdb.rating
      "imdb.rating": 1
    }
  }

]);