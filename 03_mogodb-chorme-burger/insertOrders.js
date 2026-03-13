 const { MongoClient, ObjectId } = require("mongodb");
    const readline = require("readline");
    
    // ใส่ URL ของคุณ
    const url = "mongodb://devmontri_db_user:Montri5220@ac-lmsk7x1-shard-00-00.bztmxnz.mongodb.net:27017,ac-lmsk7x1-shard-00-01.bztmxnz.mongodb.net:27017,ac-lmsk7x1-shard-00-02.bztmxnz.mongodb.net:27017/?ssl=true&replicaSet=atlas-t03rmr-shard-0&authSource=admin&appName=Cluster0";
    
     const client = new MongoClient(url);
     const rl = readline.createInterface({
       input: process.stdin,
      output: process.stdout
    });
   
    function ask(question) {
      return new Promise(resolve => rl.question(question, resolve));
    }
   
    async function run() {
      try {
        await client.connect();
        console.log("✅ เชื่อมต่อ MongoDB สำเร็จ");
   
        const db = client.db("chrome_burger"); // << ตรวจสอบชื่อ DB ตรงนี้อีกครั้ง
        const orders = db.collection("orders");
   
        const orderDate = await ask("1. วันที่สั่ง (YYYY-MM-DD): ");
        const totalPrice = await ask("2. ราคารวม: ");
        const staffId = await ask("3. รหัสพนักงาน (Staff ID 24 หลัก): ");
        const quantity = await ask("4. จำนวน: ");
   
        // ตรวจสอบความถูกต้องของ Staff ID ก่อน
        if (!ObjectId.isValid(staffId)) {
          throw new Error("รหัสพนักงานไม่ถูกต้อง! ต้องเป็นตัวเลขหรือตัวอักษร 24 หลัก");
        }
   
        const orderData = {
          order_date: (orderDate),
          total_price: (totalPrice),
          staff_id: (staffId),
          items: [
            {
            menu_item_id: new ObjectId("65f300000000000000000001"), // ID เมนูตัวอย่าง
              name: "Classic Burger",
              price: 9.99,
              quantity: parseInt(quantity)
            }
          ]
        };
   
        const result = await orders.insertOne(orderData);
        console.log("🚀 บันทึกข้อมูลสำเร็จ! ID อ้างอิง:", result.insertedId);
   
      } catch (error) {
        console.error("❌ เกิดข้อผิดพลาด:", error.message);
      } finally {
        rl.close();
        await client.close();
      }
    }
   
    run();