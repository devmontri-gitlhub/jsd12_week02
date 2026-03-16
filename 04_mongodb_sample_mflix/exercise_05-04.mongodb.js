// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาภาพยนตร์ที่มีวันที่ released อยู่ระหว่างปี 1990 ถึงก่อนปี 2001
// แล้วนับจำนวนเอกสารที่ตรงกับเงื่อนไข
db.movies.find({
    released: {
        $gte: ISODate("1990-01-01T00:00:00Z"),
        $lt: ISODate("2001-01-01T00:00:00Z")
    }
}).count();