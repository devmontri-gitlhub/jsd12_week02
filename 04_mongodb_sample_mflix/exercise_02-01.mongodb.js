// --------------------------------------------------
// DATABASE : sample_mflix
// FILE     : find_movie_by_type_and_rating.mongodb.js
// PURPOSE  : ค้นหาภาพยนตร์ 1 รายการตามเงื่อนไข type และ rated
// --------------------------------------------------


// 1) เลือกฐานข้อมูล
use("sample_mflix");


// 2) ค้นหา document 1 รายการจาก collection movies
// เงื่อนไข:
// - type ต้องเป็น "movie"
// - rated ต้องเป็น "TV-G"

db.movies.findOne({
    type: "movie",
    rated: "TV-G"
});


// --------------------------------------------------
// END OF SCRIPT
// --------------------------------------------------