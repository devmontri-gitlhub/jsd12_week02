// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาภาพยนตร์ที่ผลิตในประเทศ USA
// และออกฉายในช่วงปี 1950 ถึง 1970
db.movies.find({
    countries: { $in: ["USA"] },
    year: { $gte: 1950, $lte: 1970 }
});