let userInput = prompt("ادخل رقما صحيحا لحساب المضروب: ");
let number = Number(userInput);

if(userInput === null || isNaN(number) || !Number.isInteger(number) || number<0){
    console.log("خطأ!يرجى ادخال رقم صحيح موجب فقط:");
    
}else{
    let factorial = 1;
    for(let i = 1; i <=number ; i++){
        factorial *= i;
    }
    console.log(`${number}مضروب الرقم (!${number}) هو:${factorial}`);
}