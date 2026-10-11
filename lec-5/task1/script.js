function calculate(hours, price, costPercent, days) {
  const revenueDay = hours * price;
  const costDay = revenueDay * costPercent / 100;
  const profitDay = revenueDay - costDay;

  const profitWeek = profitDay * days;
  const profitMonth = profitWeek * 4;

  console.log("الإيراد اليومي:", revenueDay);
  console.log("التكاليف اليومية:", costDay);
  console.log("الربح اليومي:", profitDay);
  console.log("الربح الأسبوعي:", profitWeek);
  console.log("الربح الشهري:", profitMonth);
}

// const hours = Number(prompt("ساعات الدوام باليوم؟"));
// const price = Number(prompt("سعر الساعة؟"));
// const costPercent = Number(prompt("نسبة التكاليف %؟"));
// const days = Number(prompt("أيام الدوام بالأسبوع؟"));

// calculate(hours, price, costPercent, days);

calculate(6, 30, 40, 7);