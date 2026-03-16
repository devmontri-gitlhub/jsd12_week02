// --------------------------------------------------
// DATABASE : sample_mflix
// FILE     : find_comment_by_email.mongodb.js
// PURPOSE  : ค้นหา comment 1 รายการจาก email
// --------------------------------------------------

// 1) เลือก Database
use("sample_mflix");

// 2) ค้นหา document 1 รายการใน collection comments
// โดยใช้ email เป็นเงื่อนไข

db.comments.findOne({
    email: "john_bishop@fakegmail.com"
});

// --------------------------------------------------
// END OF SCRIPT
// --------------------------------------------------