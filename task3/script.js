let total = Number(prompt("Enter the total price"));
if(isNaN(total)){
    alert("please enter valid number");
}
let discountPercentage = 0;

if(total>=200){
     discountPercentage=0.15;
    if(total*discountPercentage>100){
        // بدي اسال هان 
        discountPercentage =0.08;
    }
}
let discountAmount = total* discountPercentage;
let totalAmount = total - discountAmount;

console.log("your total amount" + total );
console.log("your discount amount"+ discountAmount);
console.log("your final price "+totalAmount);