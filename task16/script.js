const meals = [
  { name: "فلافل", price: 8 },
  { name: "شاورما", price: 20 },
  { name: "حمص", price: 10 },
  { name: "مسخن", price: 30 },
  { name: "منسف", price: 40 },
  { name: "كباب", price: 70 },
  { name: "سلطة", price: 6 }
];

function getMeals(budget) {
  
  const sorted = [...meals].sort((a, b) => a.price - b.price);

  const selected = [];
  let total = 0;

  for (const meal of sorted) {
    if (total + meal.price < budget) {
      selected.push(meal);
      total += meal.price;
    }
  }

  if (selected.length === 0) {
    console.log("السعر قليل، لا يوجد أكلات مناسبة");
    return [];
  }

  console.log("الأكلات المناسبة:");
  selected.forEach(meal => console.log(`- ${meal.name}: ${meal.price}`));
  console.log(`المجموع: ${total}`);

  return selected;
}

getMeals(50);