// --------------------------------------------------
// DATABASE : sample_mflix
// FILE     : find_comment_by_id.mongodb.js
// PURPOSE  : ค้นหา comment 1 รายการจาก _id
// --------------------------------------------------


// 1) เลือก Database ที่ต้องการใช้งาน
use("sample_mflix");


// 2) ค้นหา document เพียง 1 รายการจาก collection comments
// โดยใช้ _id เป็นเงื่อนไขในการค้นหา

db.comments.findOne({
    _id: ObjectId("5a9427648b0beebeb69579f5")
});


// --------------------------------------------------
// END OF SCRIPT
// --------------------------------------------------