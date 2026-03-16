// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหา theaters ที่ state = AL แล้วนับจำนวน
db.theaters.find(
    { "location.address.state": "AL" }
).count();