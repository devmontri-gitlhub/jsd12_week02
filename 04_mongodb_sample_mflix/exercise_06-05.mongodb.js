// เลือกใช้งานฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาข้อมูลใน collection movies
// โดยใช้เงื่อนไขว่าฟิลด์ directors ต้องมีค่าอยู่ในรายการที่กำหนด
db.movies.find({

    // ใช้ operator $in เพื่อตรวจสอบค่าใน array
    directors: {
        $in: ["Hal Roach"]
    }

});