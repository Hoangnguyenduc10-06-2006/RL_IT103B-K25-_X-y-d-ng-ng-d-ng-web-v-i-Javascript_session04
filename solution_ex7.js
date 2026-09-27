let menuTable1 = "SMLTX";
let menuTable2 = "SMT";
let menuTable3 = "LLMTX";
let price=0;
let totalRevenue=0

console.log("-------- bắt đầu ca làm ----------");

for (let i = 0; i < 3; i++) {
    console.log("    =====================");
    console.log(`    =    hóa đơn bàn ${i+1}  =`);
    console.log("    =====================");
    let menuTablei = i === 1 ? menuTable1 : i === 2 ? menuTable2 : menuTable3;
    console.log(`    danh sách món ăn bàn ${i+1} : ${menuTablei}`    );


    for (let j = 0; j < menuTablei.length; j++) {
    let item = menuTablei[j];

    if (item === "X") {
        console.log("hủy món ăn");
        continue;
    }
 
    if (item === "S") {
        price += 35000
        console.log(`  - Món '${item}': 35000 vnd`);
  
    }
    else if (item === "M"){
         price += 42000
         console.log(`  - Món '${item}': 42000 vnd`);
    }
    else if (item === "L") {
        price += 48000
        console.log(`  - Món '${item}': 48000 vnd`);
    }
    else if (item === "T") {
        price += 10000
        console.log(`  - Món '${item}': 10000 vnd`);
    };
  }

  console.log(`  Tạm tính:  ${price} VNĐ`);

  let discount = 0;
  let sale =false;
  if (price > 100000) {
    discount = price * 0.1;
    sale =true;
  }
  const priceAfterSale = price - discount;
    console.log(`tổng thanh toán ${sale?`(giảm 10%)`:``}: ${priceAfterSale}`);
    totalRevenue += priceAfterSale;

console.log("========================================");
console.log(`TỔNG DOANH THU CA PHỤC VỤ: ${totalRevenue} VNĐ`);
console.log("========================================");
}