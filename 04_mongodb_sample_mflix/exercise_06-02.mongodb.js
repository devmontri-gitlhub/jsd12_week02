// เลือกใช้งาน Database ชื่อ sample_mflix
use("sample_mflix");

// ค้นหาข้อมูลใน Collection ชื่อ movies
db.movies.find({

    // เงื่อนไขที่ 1
    // genres ต้องมีค่า "Drama" และ "History" อยู่ใน Array พร้อมกัน
    genres: { 
        $all: ["Drama", "History"] 
    },

    // เงื่อนไขที่ 2
    // released ต้องมีวันที่มากกว่า 1 มกราคม 1970
    released: { 
        $gt: ISODate("1970-01-01T00:00:00Z") 
    }

})

// นับจำนวน document ที่ตรงกับเงื่อนไขทั้งหมด
.count();