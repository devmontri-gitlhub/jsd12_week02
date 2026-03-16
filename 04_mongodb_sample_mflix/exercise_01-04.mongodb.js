// --------------------------------------------------
// DATABASE : sample_mflix
// FILE     : find_comment_by_name.mongodb.js
// PURPOSE  : ค้นหา comment 1 รายการจากชื่อผู้เขียน
// --------------------------------------------------


// 1) เลือกฐานข้อมูลที่ต้องการใช้งาน
use("sample_mflix");


// 2) ค้นหา document 1 รายการใน collection comments
// โดยใช้ field "name" เป็นเงื่อนไข

db.comments.findOne({
    name: "John Bishop"
});


// --------------------------------------------------
// END OF SCRIPT
// --------------------------------------------------