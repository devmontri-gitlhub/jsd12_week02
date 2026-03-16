// เลือกฐานข้อมูล
use("sample_mflix");

// ค้นหา theaters ที่อยู่ในเมือง La Quinta
// และนับจำนวนเอกสารที่พบ
db.theaters.find(
    { "location.address.city": "La Quinta" }
).count();