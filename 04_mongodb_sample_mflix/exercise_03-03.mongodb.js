// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหา Document แรกที่มี city = "La Quinta"
db.theaters.findOne({
    "location.address.city": "La Quinta"
});