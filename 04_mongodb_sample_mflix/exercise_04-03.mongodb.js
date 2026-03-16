// เลือกฐานข้อมูล sample_mflix
use("sample_mflix");

// ค้นหาภาพยนตร์ที่มีข้อความใน plot ตรงกับรูปแบบ Regex
db.movies.find({
    plot: {
        $regex: "street.$",
        $options: "i"
    }
});