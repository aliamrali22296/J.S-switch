let grade = +prompt("Enter your grade:")
 switch (true){
 case grade < 0 | grade > 100:
 console.log("ادخل رقم صحيح");
 break;
 case grade < 50:
 console.log("راسب");
 break;
 case grade < 65:
 console.log("مقبول");
 break;
 case grade < 75:
 console.log("جيد");
 break;
 case grade < 85:
 console.log("جيد جداً");
 break;
 case grade <= 100:
 console.log("إمتياز");
 break;
 default:
 console.log("ادخل رقم صحيح");
 break;





















}