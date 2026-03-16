// --------------------------------------------------
// DATABASE : sample_mflix
// FILE     : count_movies_by_type_and_rating.mongodb.js
// PURPOSE  : นับจำนวนภาพยนตร์ที่มี type และ rated ตามเงื่อนไข
// --------------------------------------------------


// 1) เลือกฐานข้อมูลที่ต้องการใช้งาน
use("sample_mflix");


// 2) ค้นหาข้อมูลใน collection movies
// เงื่อนไข:
// - type ต้องเป็น "movie"
// - rated ต้องเป็น "TV-G"

db.movies.find({
    type: "movie",
    rated: "TV-G"
}).count();


// --------------------------------------------------
// END OF SCRIPT
// --------------------------------------------------