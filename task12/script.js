function getFactorial(n) {
     if (n === 0 || n === 1) { 
        return 1;
     } return n * getFactorial(n - 1); 
    }
let userInput = prompt("ادخل رقماً صحيحاً لحساب المضروب:");
 let number = Number(userInput);
 if (userInput === null || isNaN(number) || !Number.isInteger(number) || number < 0) { 
    console.log("خطأ! يرجى إدخال رقم صحيح موجب فقط");
 }
  else { 
    let result = getFactorial(number); 
    console.log(`مضروب الرقم (!${number} هو: ${result}`); 
     }